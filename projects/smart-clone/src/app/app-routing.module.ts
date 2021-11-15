import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@smart-clone/env/environment';

// using hard-coded values for the demo
const { listID, token } = environment.smart.hardCoded;

const routes: Routes = [
  {
    path: '',
    redirectTo: `${listID}/${token}`,
    pathMatch: 'full',
  },
  {
    path: ':listID/:token',
    pathMatch: 'prefix',
    loadChildren: () => import('./features/property/property.module').then(m => m.PropertyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
