import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Map } from 'mapbox-gl';
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
  @Input() interactive = false;

  @Input() set paint(paint: any) {
    this.setPaint(paint);
  }

  @Input() set visible(visible: boolean) {
    this.setVisibility(visible);
  }

  @Output() click = new EventEmitter<any>();
  @Output() mousemove = new EventEmitter<any>();
  @Output() mouseenter = new EventEmitter<any>();
  @Output() mouseleave = new EventEmitter<any>();

  private _paint: any;
  private _visible = true;
  private layerAdded = false;

  private map$ = this.mapService.map$.pipe(first());

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.addLayer();
  }

  ngOnDestroy(): void {
    this.removeLayer();
  }

  private addLayer() {
    this.map$.subscribe(map => {
      if (this.layerAdded) return;
      this.layerAdded = true;

      map.addLayer({
        id: this.id,
        type: this.type,
        source: this.sourceId,
        paint: this._paint,
        layout: {
          visibility: this._visible ? 'visible' : 'none',
        },
      });

      if (this.interactive) {
        this.bindEvents(map);
      }
    });
  }

  private removeLayer() {
    this.map$.subscribe(map => {
      if (!this.layerAdded) return;
      this.layerAdded = false;

      if (map.getLayer(this.id)) {
        map.removeLayer(this.id);
      }
    });
  }

  private bindEvents(map: Map) {
    map.on('click', this.id, e => this.click.emit(e));
    map.on('mousemove', this.id, e => this.mousemove.emit(e));
    map.on('mouseenter', this.id, e => this.mouseenter.emit(e));
    map.on('mouseleave', this.id, e => this.mouseleave.emit(e));
  }

  private setPaint(paint: any) {
    this._paint = paint;
    if (!this.layerAdded || !paint) return;

    this.map$.subscribe(map => Object.keys(paint).forEach(key => map.setPaintProperty(this.id, key, paint[key])));
  }

  private setVisibility(visible: boolean) {
    this._visible = visible;
    if (!this.layerAdded) return;

    this.map$.subscribe(map => map.setLayoutProperty(this.id, 'visibility', visible ? 'visible' : 'none'));
  }
}
