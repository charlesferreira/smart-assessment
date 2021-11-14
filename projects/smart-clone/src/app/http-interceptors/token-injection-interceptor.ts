import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '@smart-clone/env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInjectionInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      params: req.params.set('token', environment.smart.hardCoded.token),
    });

    return next.handle(cloneReq);
  }
}
