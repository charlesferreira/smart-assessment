import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PropertiesState } from './properties.state';

export const selectPropertiesState = createFeatureSelector<PropertiesState>('properties');

export const selectCurrentPropertyList = createSelector(
  selectPropertiesState,
  (state: PropertiesState) => state.currentPropertyList
);
