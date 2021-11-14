import { PropertyList } from '@smart-clone/models/property-list.model';
import { Property } from '@smart-clone/models/property.model';

export interface PropertyState {
  currentPropertyList?: PropertyList;
  currentProperty?: Property;
}
