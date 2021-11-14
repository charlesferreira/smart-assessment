import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PropertyState } from './property.state';

export const selectPropertiesState = createFeatureSelector<PropertyState>('property');

export const selectCurrentPropertyList = createSelector(
  selectPropertiesState,
  (state: PropertyState) => state.currentPropertyList
);
