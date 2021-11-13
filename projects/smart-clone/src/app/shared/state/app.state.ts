import { PropertyList } from '../models/property-list.model';
import { Property } from '../models/property.model';

export interface AppState {
  propertyLists: ReadonlyArray<PropertyList>;
  properties: ReadonlyArray<Property>;
}
