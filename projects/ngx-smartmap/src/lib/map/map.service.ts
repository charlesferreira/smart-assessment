import { Injectable } from '@angular/core';
import { Map, MapboxOptions } from 'mapbox-gl';
import { AsyncSubject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map$ = new AsyncSubject<Map>();

  private map?: Map;

  createMap(config: MapboxOptions) {
    this.map = new Map(config);

    fromEvent(this.map, 'load').subscribe(({ target }) => {
      this.map$.next(target);
      this.map$.complete();
    });
  }

  destroyMap() {
    if (this.map) {
      this.map.remove();
    }
  }
}
