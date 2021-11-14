import { createAction } from '@ngrx/store';

export const setLoading = createAction('[App] Set Loading', (isLoading: boolean) => ({ isLoading }));

export const setToken = createAction('[App] Set Token', (token: string) => ({ token }));
