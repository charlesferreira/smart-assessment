import { Component, Input, OnInit } from '@angular/core';
import { GeoJSON } from 'geojson';

@Component({
  selector: 'smartmap-source',
  template: '',
})
export class SourceComponent implements OnInit {
  @Input() data?: GeoJSON;

  constructor() {}

  ngOnInit(): void {
    console.log('SourceComponent');
  }
}
