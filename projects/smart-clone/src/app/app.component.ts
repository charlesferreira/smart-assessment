import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromShared from './shared/state/shared.selectors';

@Component({
  selector: 'smart-clone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  isLoading$ = this.store.select(fromShared.isLoading);

  constructor(private store: Store, private cdr: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
