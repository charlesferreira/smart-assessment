import { PropertyList } from '@smart-clone/models/property-list.model';
import { Property } from '@smart-clone/models/property.model';

export const isProperty = (value: Property | PropertyList): boolean | undefined => {
  return (value as Property).propertyID !== undefined;
};
