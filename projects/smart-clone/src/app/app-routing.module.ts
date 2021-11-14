import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@smart-clone/env/environment';

import { PropertyListComponent } from './properties/property-list/property-list.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
