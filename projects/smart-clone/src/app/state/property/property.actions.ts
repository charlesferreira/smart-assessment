import { createAction, props } from '@ngrx/store';
import { Property } from '@smart-clone/models/property.model';

export const retrievedProperties = createAction('[Property] Retrieved Properties', props<{ properties: ReadonlyArray<Property> }>());
