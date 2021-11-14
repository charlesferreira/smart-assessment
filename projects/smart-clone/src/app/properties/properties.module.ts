import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular-material.module';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  declarations: [PropertyListComponent],
  exports: [PropertyListComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class PropertiesModule {}
