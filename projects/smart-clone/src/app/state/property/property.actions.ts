import { createAction, props } from '@ngrx/store';
import { PropertyList } from '@smart-clone/models/property-list.model';
import { Property } from '@smart-clone/models/property.model';

export const selectPropertyList = createAction('[Property] Select PropertyList', props<{ listID: number }>());

export const selectedPropertyList = createAction('[Property] Selected PropertyList', props<PropertyList>());

export const errorSelectingPropertyList = createAction(
  '[Property] Error Selecting PropertyList',
  props<{ error: any }>()
);

export const selectProperty = createAction(
  '[Property] Select Property',
  props<{ listID: number; propertyID: number }>()
);

export const selectedProperty = createAction('[Property] Selected Property', props<Property>());

export const errorSelectingProperty = createAction('[Property] Error Selecting Property', props<{ error: any }>());
