import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PropertyState } from './property.state';

export const propertiesState = createFeatureSelector<PropertyState>('property');

export const getCurrentPropertyList = createSelector(
  propertiesState,
  (state: PropertyState) => state.currentPropertyList
);

export const getCurrentProperty = createSelector(propertiesState, (state: PropertyState) => state.currentProperty);

export const getCurrentView = createSelector(propertiesState, (state: PropertyState) => state.currentView);
