import { Injectable } from '@angular/core';
import * as Mapbox from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map?: Mapbox.Map;

  initMap(config: Mapbox.MapboxOptions) {
    this.map = new Mapbox.Map(config);
  }
}
