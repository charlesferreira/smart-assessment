import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { token } from '@smart-clone/shared/state/shared.selectors';
import { Observable } from 'rxjs';
import { first, mergeMap } from 'rxjs/operators';

@Injectable()
export class TokenInjectionInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(token).pipe(
      first(),
      mergeMap(token => {
        const authReq = req.clone({
          params: req.params.set('token', token),
        });
        return next.handle(authReq);
      })
    );
  }
}
