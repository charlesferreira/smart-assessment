import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '@smart-clone/env/environment';
import { currentProperty, currentPropertyList } from '@smart-clone/state/property/property.selectors';
import { MapConfig } from 'ngx-smartmap';
import { merge } from 'rxjs';

@Component({
  selector: 'smart-clone-property-map',
  templateUrl: './property-map.component.html',
  styleUrls: ['./property-map.component.scss'],
})
export class PropertyMapComponent implements OnInit {
  mapConfig: MapConfig = {
    accessToken: environment.mapbox.accessToken,
    style: environment.mapbox.style,
  };

  mapData$ = merge(this.store.select(currentPropertyList), this.store.select(currentProperty));

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
