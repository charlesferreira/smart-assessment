import { createAction, props } from '@ngrx/store';
import { PropertyList } from '@smart-clone/shared/models/property-list.model';

export const selectedPropertyList = createAction('[Properties] Selected PropertyList', props<PropertyList>());
