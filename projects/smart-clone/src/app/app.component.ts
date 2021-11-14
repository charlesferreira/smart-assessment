import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { currentPropertyList } from './state/property/property.selectors';

@Component({
  selector: 'smart-clone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  propertyList$ = this.store.select(currentPropertyList);

  constructor(private store: Store) {}
}
