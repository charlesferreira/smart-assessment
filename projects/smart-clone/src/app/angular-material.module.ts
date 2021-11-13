import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressBarModule,
  ],
})
export class AngularMaterialModule {}
