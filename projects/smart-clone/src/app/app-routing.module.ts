import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@smart-clone/env/environment';

import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

// use hard-coded values for the demo
const { listID, token } = environment.smart.hardCoded;

const routes: Routes = [
  {
    path: '',
    redirectTo: `${listID}/${token}`,
    pathMatch: 'full',
  },
  {
    path: ':listID/:token',
    component: PropertyListComponent,
  },
  {
    path: ':listID/:token/:propertyID',
    component: PropertyDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
