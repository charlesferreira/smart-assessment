import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PropertyService } from '@smart-clone/services/property.service';
import { map, switchMap } from 'rxjs/operators';

import { selectedProperty, selectedPropertyList, selectProperty, selectPropertyList } from './property.actions';

@Injectable()
export class PropertyEffects {
  selectPropertyList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectPropertyList),
      switchMap(action =>
        this.propertyService
          .getPropertyList(action.listID)
          .pipe(map(propertyList => selectedPropertyList(propertyList)))
      )
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

  constructor(private actions$: Actions, private propertyService: PropertyService) {}
}
