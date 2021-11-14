import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PropertyState } from './property.state';

export const propertiesState = createFeatureSelector<PropertyState>('property');

export const currentPropertyList = createSelector(propertiesState, (state: PropertyState) => state.currentPropertyList);

export const currentProperty = createSelector(propertiesState, (state: PropertyState) => state.currentProperty);
