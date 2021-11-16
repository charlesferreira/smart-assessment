import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { isProperty } from '@smart-clone/helpers/property';
import { currentProperty, currentPropertyList } from '@smart-clone/state/property/property.selectors';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

import { mapConfig } from './property-map-config';

@Component({
  selector: 'smart-clone-property-map',
  templateUrl: './property-map.component.html',
  styleUrls: ['./property-map.component.scss'],
})
export class PropertyMapComponent {
  mapConfig = mapConfig;

  mapData$ = merge(this.store.select(currentPropertyList), this.store.select(currentProperty));

  isProperty$ = this.mapData$.pipe(map(data => data && isProperty(data)));

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

  onPropertyListClick(e: any) {
    const { propertyID } = e.features[0].properties;
    let route = this.route.firstChild;
    while (route?.firstChild) route = route.firstChild;

    this.router.navigate([propertyID], { relativeTo: route });
  }
}
