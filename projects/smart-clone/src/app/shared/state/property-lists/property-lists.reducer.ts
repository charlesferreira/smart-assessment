import { createReducer, on } from '@ngrx/store';

import { selectedPropertyList } from './property-lists.actions';
import { PropertyListsState } from './property-lists.state';

export const initialState: PropertyListsState = {};

export const propertyListsReducer = createReducer(
  initialState,
  on(selectedPropertyList, (state, currentPropertyList) => ({ ...state, currentPropertyList }))
);
