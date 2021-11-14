import { I18nPluralPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize',
})
export class PluralizePipe implements PipeTransform {
  private mapping = {
    amenities: {
      '=0': 'No high value amenities',
      '=1': '1 High value amenity',
      other: '# High value amenities',
    },
  };

  constructor(private i18Plural: I18nPluralPipe) {}

  transform(value: number, type: 'amenities'): string {
    return this.i18Plural.transform(value, this.mapping[type]);
  }
}
