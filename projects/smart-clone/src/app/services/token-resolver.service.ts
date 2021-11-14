import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { setToken } from '@smart-clone/state/shared/shared.actions';

@Injectable({
  providedIn: 'root',
})
export class TokenResolver implements Resolve<string> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
    const token = route.paramMap.get('token') ?? '';

    this.store.dispatch(setToken(token));

    return token;
  }
}
