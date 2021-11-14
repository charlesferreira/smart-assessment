import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLoading } from '@smart-clone/state/shared/shared.actions';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class LoadingStateInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.dispatch(setLoading(true));

    return next.handle(req).pipe(finalize(() => this.store.dispatch(setLoading(false))));
  }
}
