import { PropertyState } from '../property/state/property.state';
import { SharedState } from '../shared/state/shared.state';

export interface AppState {
  property: PropertyState;
  shared: SharedState;
}
