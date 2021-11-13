import { createFeatureSelector } from '@ngrx/store';

import { PropertyList } from '../../models/property-list.model';

export const selectPropertyLists = createFeatureSelector<ReadonlyArray<PropertyList>>('propertyLists');
