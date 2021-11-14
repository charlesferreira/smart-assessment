import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PropertyListsState } from './property-lists.state';

export const selectPropertyListsState = createFeatureSelector<PropertyListsState>('propertyLists');

export const selectCurrentPropertyList = createSelector(
  selectPropertyListsState,
  (state: PropertyListsState) => state.currentPropertyList
);
