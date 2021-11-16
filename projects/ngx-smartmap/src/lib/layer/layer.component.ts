import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { MapService } from '../map/map.service';

@Component({
  selector: 'smartmap-layer',
  template: '',
})
export class LayerComponent implements OnInit {
  @Input() id = '';
  @Input() sourceId = '';
  @Input() type: any;
  @Input() paint: any;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.map$.pipe(first()).subscribe(map => {
      map.addLayer({
        id: this.id,
        type: this.type,
        source: this.sourceId,
        paint: this.paint,
      });
    });
  }
}
