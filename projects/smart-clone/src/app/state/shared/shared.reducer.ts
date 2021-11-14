import { createReducer, on } from '@ngrx/store';

import { setLoading } from './shared.actions';
import { SharedState } from './shared.state';

export const initialState: SharedState = {
  isLoading: false,
};

export const sharedReducer = createReducer(
  initialState,
  on(setLoading, (state, { isLoading }) => ({ ...state, isLoading }))
);
