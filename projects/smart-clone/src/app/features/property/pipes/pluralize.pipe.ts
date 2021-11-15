import { I18nPluralPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

type MapKey = 'amenities' | 'beds' | 'baths';

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
    baths: {
      '=0': 'No baths',
      '=1': '1 bath',
      other: '# baths',
    },
    beds: {
      '=0': 'No beds',
      '=1': '1 bed',
      other: '# beds',
    },
  };

  constructor(private i18Plural: I18nPluralPipe) {}

  transform(value: number, type: MapKey): string {
    return this.i18Plural.transform(value, this.mapping[type]);
  }
}
