import { PropertyState } from './property/property.state';

export interface AppState {
  property: PropertyState;
  isLoading: boolean;
}
