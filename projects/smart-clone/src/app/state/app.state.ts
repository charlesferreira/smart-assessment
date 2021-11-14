import { PropertyState } from './property/property.state';
import { SharedState } from './shared/shared.state';

export interface AppState {
  property: PropertyState;
  shared: SharedState;
}
