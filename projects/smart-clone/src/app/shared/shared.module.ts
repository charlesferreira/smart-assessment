import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { httpInterceptorProviders } from '@smart-clone/shared/services/http-interceptors';

import { sharedReducer } from './state/shared.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('shared', sharedReducer), EffectsModule.forFeature([])],
  declarations: [],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  providers: [httpInterceptorProviders],
})
export class SharedModule {}
