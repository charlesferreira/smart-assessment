import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { currentPropertyList } from './state/property/property.selectors';
import * as fromShared from './state/shared/shared.selectors';

@Component({
  selector: 'smart-clone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  isLoading$ = this.store.select(fromShared.isLoading);

  propertyList$ = this.store.select(currentPropertyList);

  constructor(private store: Store, private cdr: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
