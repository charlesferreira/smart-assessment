import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { MapService } from '../map/map.service';

@Component({
  selector: 'smartmap-layer',
  template: '',
})
export class LayerComponent implements OnInit, OnDestroy {
  @Input() id = '';
  @Input() sourceId = '';
  @Input() type: any;
  @Input() set paint(paint: any) {
    this.setPaint(paint);
  }

  private map$ = this.mapService.map$.pipe(first());

  private _paint: any;
  private layerAdded = false;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.addLayer();
  }

  ngOnDestroy(): void {
    this.removeLayer();
  }

  private addLayer() {
    console.log('current paint', this._paint);
    this.map$.subscribe(map => {
      if (this.layerAdded) return;
      this.layerAdded = true;
      map.addLayer({
        id: this.id,
        type: this.type,
        source: this.sourceId,
        paint: this._paint,
      });
    });
  }

  private removeLayer() {
    this.map$.subscribe(map => {
      if (!this.layerAdded) return;
      this.layerAdded = false;
      map.removeLayer(this.id);
    });
  }

  private setPaint(paint: any) {
    this._paint = paint;
    if (!this.layerAdded || !paint) return;

    this.map$.subscribe(map => Object.keys(paint).forEach(key => map.setPaintProperty(this.id, key, paint[key])));
  }
}
