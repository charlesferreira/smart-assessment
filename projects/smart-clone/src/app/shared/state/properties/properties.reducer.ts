import { createReducer, on } from '@ngrx/store';

import { Property } from '../../../core/models/property.model';
import { retrievedProperties } from './properties.actions';

export const initialState: ReadonlyArray<Property> = [];

export const propertiesReducer = createReducer(
  initialState,
  on(retrievedProperties, (state, { properties }) => properties)
);
