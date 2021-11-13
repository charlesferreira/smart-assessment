import { createAction, props } from '@ngrx/store';

import { PropertyList } from '../../models/property-list.model';

export const retrievedPropertyLists = createAction(
  '[PropertyLists] Retrieved PropertyLists',
  props<{ propertyLists: ReadonlyArray<PropertyList> }>()
);
