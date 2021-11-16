import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PropertyService } from '@smart-clone/services/property.service';
import { of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { selectedProperty, selectedPropertyList, selectProperty, selectPropertyList } from './property.actions';
import { currentPropertyList } from './property.selectors';

@Injectable()
export class PropertyEffects {
  selectPropertyList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectPropertyList),
      withLatestFrom(this.store.select(currentPropertyList), (action, propertyList) => ({ action, propertyList })),
      switchMap(({ action, propertyList }) => {
        if (propertyList) {
          return of(selectedPropertyList(propertyList));
        }
        return this.propertyService
          .getPropertyList(action.listID)
          .pipe(map(propertyList => selectedPropertyList(propertyList)));
      })
    )
  );

  selectProperty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectProperty),
      switchMap(action =>
        this.propertyService
          .getProperty(action.listID, action.propertyID)
          .pipe(map(property => selectedProperty(property)))
      )
    )
  );

  constructor(private store: Store, private actions$: Actions, private propertyService: PropertyService) {}
}
