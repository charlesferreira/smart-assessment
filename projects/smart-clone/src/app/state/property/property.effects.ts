import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PropertyService } from '@smart-clone/services/property.service';
import { merge, of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { loadedProperty, loadedPropertyList, loadProperty, loadPropertyList } from './property.actions';
import { getCurrentPropertyList } from './property.selectors';

@Injectable()
export class PropertyEffects {
  loadPropertyList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPropertyList),
      withLatestFrom(this.store.select(getCurrentPropertyList), (action, propertyList) => ({ action, propertyList })),
      switchMap(({ action, propertyList }) => {
        if (propertyList) {
          return of(loadedPropertyList(propertyList));
        }
        return this.propertyService
          .getPropertyList(action.listID)
          .pipe(map(propertyList => loadedPropertyList(propertyList)));
      })
    )
  );

  loadProperty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProperty),
      withLatestFrom(this.store.select(getCurrentPropertyList), (action, propertyList) => ({ action, propertyList })),
      switchMap(({ action, propertyList }) => {
        const actions = [
          this.propertyService
            .getProperty(action.listID, action.propertyID)
            .pipe(map(property => loadedProperty(property))),
        ];

        const property = propertyList?.records?.find(p => p.propertyID === action.propertyID);
        if (property) {
          actions.push(of(loadedProperty(property)));
        }

        return merge(...actions);
      })
    )
  );

  constructor(private store: Store, private actions$: Actions, private propertyService: PropertyService) {}
}
