import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule, MatProgressBarModule, MatTabsModule],
})
export class SharedModule {}
