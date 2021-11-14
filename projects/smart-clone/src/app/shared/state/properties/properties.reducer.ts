import { createReducer, on } from '@ngrx/store';

import { selectedPropertyList } from './properties.actions';
import { PropertiesState } from './properties.state';

export const initialState: PropertiesState = {};

export const propertiesReducer = createReducer(
  initialState,
  on(selectedPropertyList, (state, currentPropertyList) => ({ ...state, currentPropertyList }))
);
