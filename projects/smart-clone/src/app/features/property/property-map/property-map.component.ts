import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { isProperty } from '@smart-clone/helpers/property';
import { PropertyList } from '@smart-clone/models/property-list.model';
import { Property } from '@smart-clone/models/property.model';
import { currentProperty, currentPropertyList } from '@smart-clone/state/property/property.selectors';
import { AnyPaint } from 'mapbox-gl';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

import { mapConfig } from './property-map-config';
import { propertyListPaint, propertyPaint } from './property-map-paint';

@Component({
  selector: 'smart-clone-property-map',
  templateUrl: './property-map.component.html',
  styleUrls: ['./property-map.component.scss'],
})
export class PropertyMapComponent {
  mapConfig = mapConfig;

  mapData$ = merge(this.store.select(currentPropertyList), this.store.select(currentProperty));

  paint$ = this.mapData$.pipe(map(data => this.mapDataToPaint(data)));

  constructor(private store: Store) {}

  private mapDataToPaint(data: Property | PropertyList | undefined): AnyPaint {
    if (data === undefined) return {};

    return isProperty(data) ? propertyPaint : propertyListPaint;
  }
}
