import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertyListComponent } from './property-list/property-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'property-list',
    pathMatch: 'full',
  },
  {
    path: 'property-list',
    component: PropertyListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
