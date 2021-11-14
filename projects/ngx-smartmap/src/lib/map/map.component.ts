import { Component, Input, OnInit } from '@angular/core';

import { MapConfig } from './../models/map-config.model';
import { MapService } from './map.service';

@Component({
  selector: 'smartmap-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Input() config!: MapConfig;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.initMap({ ...this.config, container: 'map' });
  }
}
