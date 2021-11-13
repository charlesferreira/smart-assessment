import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './../angular-material.module';
import { PropertyListRoutingModule } from './property-list-routing.module';
import { PropertyListComponent } from './property-list.component';

@NgModule({
  declarations: [PropertyListComponent],
  imports: [PropertyListRoutingModule, AngularMaterialModule],
})
export class PropertyListModule {}
