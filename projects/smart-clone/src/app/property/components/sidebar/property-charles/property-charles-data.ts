import { Feature, Point } from 'geojson';

export const charlesHome: Feature<Point> = {
  type: 'Feature',
  properties: {
    name: 'Charles Home',
  },
  geometry: {
    type: 'Point',
    coordinates: [-49.293813201367, -25.467842885796003],
  },
};
