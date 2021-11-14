import { Property } from '../../core/models/property.model';
import { PropertyListsState } from './property-lists/property-lists.state';

export interface AppState {
  propertyLists: PropertyListsState;
  properties: ReadonlyArray<Property>;
}
