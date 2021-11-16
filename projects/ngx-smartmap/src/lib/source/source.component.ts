import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Feature, FeatureCollection, Point } from 'geojson';
import { GeoJSONSource, LngLatBounds, Map } from 'mapbox-gl';
import { first } from 'rxjs/operators';

import { MapService } from '../map/map.service';

type DataType = Feature<Point> | FeatureCollection<Point> | null | undefined;

@Component({
  selector: 'smartmap-source',
  template: '',
})
export class SourceComponent implements OnInit, OnDestroy {
  @Input() id = '';
  @Input() maxZoom = 15;
  @Input() zoomPadding = 50;
  @Input() zoomToFit = false;

  @Input()
  set data(data: DataType) {
    this.sourceAdded ? this.updateSource(data) : this.addSource(data);
  }

  private sourceAdded = false;

  private get map$() {
    return this.mapService.map$.pipe(first());
  }

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.addSource({
      type: 'FeatureCollection',
      features: [],
    });
  }

  ngOnDestroy(): void {
    this.removeSource();
  }

  private addSource(data: DataType): void {
    this.map$.subscribe(map => {
      if (this.sourceAdded) return;
      this.sourceAdded = true;

      map.addSource(this.id, {
        type: 'geojson',
        data: data || undefined,
      });

      if (this.zoomToFit) this.fitBounds(data);
    });
  }

  private updateSource(data: DataType): void {
    this.map$.subscribe(map => {
      (map.getSource(this.id) as GeoJSONSource).setData(data!);

      if (this.zoomToFit) this.fitBounds(data);
    });
  }

  private removeSource(): void {
    this.map$.subscribe(map => {
      this.removeSourceLayers(map);
      map.removeSource(this.id);
      this.sourceAdded = false;
    });
  }

  private removeSourceLayers(map: Map): void {
    const layers = (map.getStyle().layers || []).filter(layer => 'source' in layer && layer.source === this.id);
    layers.forEach(layer => map.removeLayer(layer.id));
  }

  private getCoordinates(data: DataType): number[][] {
    if (!data) return [];

    if (data.type === 'FeatureCollection') {
      return data.features.map(feature => feature.geometry.coordinates);
    } else {
      return [data.geometry.coordinates];
    }
  }

  private fitBounds(data: DataType): void {
    this.map$.subscribe(map => {
      const coordinates = this.getCoordinates(data);

      if (coordinates.length === 0) return;

      const bounds = new LngLatBounds([coordinates[0][0], coordinates[0][1], coordinates[0][0], coordinates[0][1]]);

      for (const coord of coordinates) {
        bounds.extend([coord[0], coord[1]]);
      }

      map.fitBounds(bounds, { padding: this.zoomPadding, maxZoom: this.maxZoom });
    });
  }
}
