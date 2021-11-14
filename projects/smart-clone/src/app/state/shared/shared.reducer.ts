import { createReducer, on } from '@ngrx/store';

import { setLoading } from './shared.actions';
import { SharedState } from './shared.state';

export const initialState: SharedState = {
  loading: 0,
};

export const sharedReducer = createReducer(
  initialState,
  on(setLoading, (state, { isLoading }) => ({ ...state, loading: state.loading + (isLoading ? 1 : -1) }))
);
