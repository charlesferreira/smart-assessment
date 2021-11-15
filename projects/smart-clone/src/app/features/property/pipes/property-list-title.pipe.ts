import { Pipe, PipeTransform } from '@angular/core';
import { PropertyList } from '@smart-clone/models/property-list.model';

@Pipe({
  name: 'propertyListTitle',
})
export class PropertyListTitlePipe implements PipeTransform {
  transform(propertyList: PropertyList): string {
    if (propertyList.title) return propertyList.title;

    const { firstname, lastname, company } = propertyList.agentInfo;
    return `${firstname} ${lastname} | ${company}`;
  }
}
