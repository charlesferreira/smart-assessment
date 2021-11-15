import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenResolver } from '@smart-clone/services/token-resolver.service';

import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyListComponent } from './property-list/property-list.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyListComponent,
    resolve: { token: TokenResolver },
  },
  {
    path: ':propertyID',
    component: PropertyDetailsComponent,
    resolve: { token: TokenResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyRoutingModule {}
