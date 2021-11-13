import { createAction, props } from '@ngrx/store';

import { Property } from '../../models/property.model';

export const retrievedProperties = createAction(
  '[Property] Retrieved Properties',
  props<{ properties: ReadonlyArray<Property> }>()
);
