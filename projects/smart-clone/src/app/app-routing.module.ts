import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'property-list',
    pathMatch: 'full',
  },
  {
    path: 'property-list',
    loadChildren: () => import('./property-list/property-list.module').then(m => m.PropertyListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
