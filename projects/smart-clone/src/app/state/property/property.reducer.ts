import { createReducer, on } from '@ngrx/store';

import { selectedProperty, selectedPropertyList } from './property.actions';
import { PropertyState } from './property.state';

export const initialState: PropertyState = {};

export const propertyReducer = createReducer(
  initialState,
  on(selectedPropertyList, (state, currentPropertyList) => ({ ...state, currentPropertyList })),
  on(selectedProperty, (state, currentProperty) => ({ ...state, currentProperty }))
);
