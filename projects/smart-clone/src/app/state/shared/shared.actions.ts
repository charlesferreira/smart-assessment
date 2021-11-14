import { createAction } from '@ngrx/store';

export const setLoading = createAction('[App] Set Loading', (isLoading: boolean) => ({ isLoading }));
