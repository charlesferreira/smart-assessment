import { Injectable } from '@angular/core';
import { Map, MapboxOptions } from 'mapbox-gl';
import { AsyncSubject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map$ = new AsyncSubject<Map>();

  private _map?: Map;

  createMap(config: MapboxOptions) {
    this._map = new Map(config);

    fromEvent(this._map, 'load').subscribe(({ target }) => {
      this.map$.next(target);
      this.map$.complete();
    });
  }

  destroyMap() {
    if (this._map) {
      this._map.remove();
      this.map$.unsubscribe();
    }
  }
}
