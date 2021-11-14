import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingStateInterceptor } from './loading-state-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoadingStateInterceptor, multi: true },
];
