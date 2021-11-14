import { MapboxOptions } from 'mapbox-gl';

export interface MapConfig extends Omit<MapboxOptions, 'container'> {}
