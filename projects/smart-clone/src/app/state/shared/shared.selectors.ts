import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SharedState } from './shared.state';

export const sharedState = createFeatureSelector<SharedState>('shared');

export const isLoading = createSelector(sharedState, (state: SharedState) => state.loading > 0);
