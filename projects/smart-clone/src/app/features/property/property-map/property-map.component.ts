import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PropertyEffects } from '@smart-clone/state/property/property.effects';
import { getCurrentProperty, getCurrentPropertyList, getCurrentView } from '@smart-clone/state/property/property.selectors';
import { CurrentView } from '@smart-clone/state/property/property.state';
import { isLoading } from '@smart-clone/state/shared/shared.selectors';
import { Feature, Point } from 'geojson';
import { BehaviorSubject, combineLatest, of, zip } from 'rxjs';
import { map } from 'rxjs/operators';

import { mapConfig } from './property-map-config';

const CHARLES_HOME: Feature<Point> = {
  type: 'Feature',
  properties: {
    name: 'Charles Home',
  },
  geometry: {
    type: 'Point',
    coordinates: [-49.293813201367, -25.467842885796003],
  },
};

@Component({
  selector: 'smart-clone-property-map',
  templateUrl: './property-map.component.html',
  styleUrls: ['./property-map.component.scss'],
})
export class PropertyMapComponent implements OnInit, OnDestroy {
  mapConfig = mapConfig;

  currentPropertyList$ = this.store.select(getCurrentPropertyList);
  currentProperty$ = this.store.select(getCurrentProperty);
  isLoading$ = this.store.select(isLoading);

  currentView$ = new BehaviorSubject<CurrentView | undefined>(undefined);

  charlesHome = CHARLES_HOME;

  get currentRoute(): ActivatedRoute | null {
    let route = this.route.firstChild;
    while (route?.firstChild) route = route.firstChild;
    return route;
  }

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private effects: PropertyEffects
  ) {}

  ngOnInit() {
    zip(
      combineLatest([this.currentPropertyList$, this.currentProperty$, of(CHARLES_HOME)]),
      this.store.select(getCurrentView)
    )
      .pipe(map(([data, view]) => view))
      .subscribe(this.currentView$);
  }

  ngOnDestroy() {
    this.currentView$.complete();
  }

  onPropertyListClick(e: any) {
    const { propertyID } = e.features[0].properties;

    this.router.navigate([propertyID], { relativeTo: this.currentRoute });
  }
}
