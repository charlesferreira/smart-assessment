import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getCurrentProperty, getCurrentPropertyList, getCurrentView } from '@smart-clone/property/state/property.selectors';
import { CurrentView } from '@smart-clone/property/state/property.state';
import { isLoading } from '@smart-clone/shared/state/shared.selectors';
import { BehaviorSubject, merge, zip } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { GeojsonPipe } from '../../../pipes/geojson.pipe';
import { charlesHome } from '../../sidebar/property-charles/property-charles-data';
import { mapConfig } from './property-map-config';

@Component({
  selector: 'smart-clone-property-map',
  templateUrl: './property-map.component.html',
  styleUrls: ['./property-map.component.scss'],
  providers: [GeojsonPipe],
})
export class PropertyMapComponent implements OnInit, OnDestroy {
  mapConfig = mapConfig;

  isLoading$ = this.store.select(isLoading);

  mapData$ = merge(
    this.store.select(getCurrentPropertyList).pipe(map(p => this.geojsonPipe.transform(p))),
    this.store.select(getCurrentProperty).pipe(map(p => this.geojsonPipe.transform(p))),
    this.store.select(getCurrentView).pipe(
      filter(p => p === 'property-charles'),
      map(() => charlesHome)
    )
  );

  currentView$ = new BehaviorSubject<CurrentView | undefined>(undefined);

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private geojsonPipe: GeojsonPipe
  ) {}

  ngOnInit() {
    zip(this.mapData$, this.store.select(getCurrentView))
      .pipe(map(([_, view]) => view))
      .subscribe(this.currentView$);
  }

  ngOnDestroy() {
    console.log('PropertyMapComponent destroyed');
    this.currentView$.complete();
  }

  onPropertyListClick(e: any) {
    const { propertyID } = e.features[0].properties;
    let route = this.route.firstChild;
    while (route?.firstChild) route = route.firstChild;

    this.router.navigate([propertyID], { relativeTo: route });
  }
}
