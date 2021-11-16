import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { currentProperty, currentPropertyList } from '@smart-clone/state/property/property.selectors';
import { AnyPaint } from 'mapbox-gl';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';

import { mapConfig } from './property-map-config';
import { toPaint } from './property-map-paint';

@Component({
  selector: 'smart-clone-property-map',
  templateUrl: './property-map.component.html',
  styleUrls: ['./property-map.component.scss'],
})
export class PropertyMapComponent implements OnInit, OnDestroy {
  condition = false;

  mapConfig = mapConfig;

  mapData$ = merge(this.store.select(currentPropertyList), this.store.select(currentProperty));

  paint$ = new BehaviorSubject<AnyPaint>({});

  constructor(private store: Store) {
    setInterval(() => {
      this.condition = !this.condition;
    }, 3000);
  }

  ngOnInit() {
    this.mapData$.pipe(map(toPaint)).subscribe(this.paint$);
  }

  ngOnDestroy() {
    this.paint$.unsubscribe();
  }
}
