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

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    console.log('LayerComponent.ngOnInit');

    this.mapService.map$.pipe(first()).subscribe(map => {
      console.log('Adding layer');

      map.addLayer({
        id: this.id,
        type: 'circle',
        source: this.sourceId,
        paint: {
          'circle-radius': 10,
          'circle-color': '#007cbf',
        },
      });
    });
  }
}
