import { environment } from '@smart-clone/env/environment';
import { MapConfig } from 'ngx-smartmap';

export const mapConfig: MapConfig = {
  accessToken: environment.mapbox.accessToken,
  style: environment.mapbox.style,
};
