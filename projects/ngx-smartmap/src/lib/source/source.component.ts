import { Component, Input, OnInit } from '@angular/core';
import { GeoJSONSource, GeoJSONSourceOptions } from 'mapbox-gl';
import { first } from 'rxjs/operators';

import { MapService } from '../map/map.service';

type DataType = GeoJSONSourceOptions['data'] | undefined;
@Component({
  selector: 'smartmap-source',
  template: '',
})
export class SourceComponent implements OnInit {
  @Input() id = '';
  @Input() set data(data: DataType) {
    this.setData(data);
  }

  private sourceAdded = false;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    console.log('SourceComponent.ngOnInit');
    this.addSource({
      type: 'FeatureCollection',
      features: [],
    });
  }

  private setData(data: DataType | undefined): void {
    console.log('Setting data', data);

    if (!this.sourceAdded && data) {
      this.addSource(data);
    } else if (data === undefined) {
      this.removeSource();
    } else {
      this.updateSource(data);
    }
  }

  private addSource(data: DataType): void {
    this.mapService.map$.pipe(first()).subscribe(map => {
      console.log('Adding source', this.id);
      map.addSource(this.id, {
        type: 'geojson',
        data,
      });
      this.sourceAdded = true;
    });
  }

  private removeSource(): void {
    console.log('Removing source', this.id);

    if (!this.sourceAdded) {
      return;
    }
    this.mapService.map$.pipe(first()).subscribe(map => {
      map.removeSource(this.id);
      this.sourceAdded = false;
    });
  }

  private updateSource(data: DataType): void {
    console.log('Updating source', this.id);
    this.mapService.map$.pipe(first()).subscribe(map => {
      (map.getSource(this.id) as GeoJSONSource).setData(data!);
    });
  }
}
