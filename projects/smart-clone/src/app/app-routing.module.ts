import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'property',
    pathMatch: 'full',
  },
  {
    path: 'property',
    pathMatch: 'prefix',
    loadChildren: () => import('./features/property/property.module').then(m => m.PropertyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
