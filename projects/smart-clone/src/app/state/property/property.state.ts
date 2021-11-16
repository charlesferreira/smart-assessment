import { PropertyList } from '@smart-clone/models/property-list.model';
import { Property } from '@smart-clone/models/property.model';

export type CurrentView = 'property-list' | 'property-details' | 'property-charles';

export interface PropertyState {
  currentPropertyList?: PropertyList;
  currentProperty?: Property;
  currentView?: CurrentView;
}
