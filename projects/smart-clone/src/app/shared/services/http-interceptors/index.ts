import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingStateInterceptor } from './loading-state-interceptor';
import { TokenInjectionInterceptor } from './token-injection-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoadingStateInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TokenInjectionInterceptor, multi: true },
];
