import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { MapConfig } from './map-config';
import { MapService } from './map.service';

@Component({
  selector: 'smartmap-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, OnDestroy {
  @Input() config?: MapConfig;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.createMap({ ...this.config, container: 'map' });
  }

  ngOnDestroy(): void {
    this.mapService.destroyMap();
  }
}
