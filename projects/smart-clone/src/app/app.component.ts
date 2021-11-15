import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '@smart-clone/env/environment';
import { MapConfig } from 'ngx-smartmap';
import { merge } from 'rxjs';

import { currentProperty, currentPropertyList } from './state/property/property.selectors';
import * as fromShared from './state/shared/shared.selectors';

@Component({
  selector: 'smart-clone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  isLoading$ = this.store.select(fromShared.isLoading);

  mapConfig: MapConfig = {
    accessToken: environment.mapbox.accessToken,
    style: environment.mapbox.style,
  };

  mapData$ = merge(this.store.select(currentPropertyList), this.store.select(currentProperty));

  constructor(private store: Store, private cdr: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
