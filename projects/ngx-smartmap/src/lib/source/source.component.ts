import { Component, Input, OnInit } from '@angular/core';
import { GeoJSON } from 'geojson';

@Component({
  selector: 'smartmap-source',
  template: '',
})
export class SourceComponent implements OnInit {
  @Input() set data(data: GeoJSON) {
    console.log(data);
    this._data = data;
  }

  private _data?: GeoJSON;

  constructor() {}

  ngOnInit(): void {
    console.log('SourceComponent');
  }
}
