import { createAction, props } from '@ngrx/store';
import { PropertyList } from '@smart-clone/core/models/property-list.model';

export const selectedPropertyList = createAction('[PropertyLists] Selected PropertyList', props<PropertyList>());
