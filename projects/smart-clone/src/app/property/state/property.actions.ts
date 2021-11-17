import { createAction, props } from '@ngrx/store';
import { PropertyList } from '@smart-clone/models/property-list.model';
import { Property } from '@smart-clone/models/property.model';

import { CurrentView } from './property.state';

// Property List Actions

export const loadPropertyList = createAction('[Property] Load PropertyList', props<PropertyList>());

export const loadedPropertyList = createAction('[Property] Loaded PropertyList', props<PropertyList>());

export const errorLoadingPropertyList = createAction('[Property] Error Loading PropertyList', props<{ error: any }>());

// Property Actions

export const loadProperty = createAction('[Property] Load Property', props<Property>());

export const loadedProperty = createAction('[Property] Loaded Property', props<Property>());

export const errorLoadingProperty = createAction('[Property] Error Loading Property', props<{ error: any }>());

// View Actions

export const setCurrentView = createAction('[Property] Set Current View', (currentView: CurrentView) => ({
  currentView,
}));
