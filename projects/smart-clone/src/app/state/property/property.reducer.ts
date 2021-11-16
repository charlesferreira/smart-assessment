import { createReducer, on } from '@ngrx/store';

import { loadedProperty, loadedPropertyList, setCurrentView } from './property.actions';
import { PropertyState } from './property.state';

export const initialState: PropertyState = {};

export const propertyReducer = createReducer(
  initialState,
  on(loadedPropertyList, (state, currentPropertyList) => ({ ...state, currentPropertyList })),
  on(loadedProperty, (state, currentProperty) => ({ ...state, currentProperty })),
  on(setCurrentView, (state, { currentView }) => ({ ...state, currentView }))
);
