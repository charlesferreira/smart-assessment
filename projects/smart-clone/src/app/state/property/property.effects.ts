import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PropertyService } from '@smart-clone/services/property.service';
import { exhaustMap, map } from 'rxjs/operators';

import { selectedPropertyList, selectPropertyList } from './property.actions';

@Injectable()
export class PropertyEffects {
  selectPropertyList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectPropertyList),
      exhaustMap(action =>
        this.propertyService
          .getPropertyList(action.listID)
          .pipe(map(propertyList => selectedPropertyList(propertyList)))
      )
    )
  );

  constructor(private actions$: Actions, private propertyService: PropertyService) {}
}
