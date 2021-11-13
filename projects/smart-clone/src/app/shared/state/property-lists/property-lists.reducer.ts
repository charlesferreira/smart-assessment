import { createReducer, on } from '@ngrx/store';

import { PropertyList } from '../../models/property-list.model';
import { retrievedPropertyLists } from './property-lists.actions';

export const initialState: ReadonlyArray<PropertyList> = [];

export const propertyListsReducer = createReducer(
  initialState,
  on(retrievedPropertyLists, (state, { propertyLists }) => propertyLists)
);
