import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'geojson',
})
export class GeojsonPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
