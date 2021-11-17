import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@smart-clone/env/environment';
import { TokenResolver } from '@smart-clone/shared/services/resolvers/token-resolver.service';

import { PropertyCharlesComponent } from './components/sidebar/property-charles/property-charles.component';
import { PropertyDetailsComponent } from './components/sidebar/property-details/property-details.component';
import { PropertyListComponent } from './components/sidebar/property-list/property-list.component';
import { PropertyComponent } from './property.component';

// using hard-coded values just for the demo
const { listID, token } = environment.smart.hardCoded;

const routes: Routes = [
  {
    path: '',
    component: PropertyComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: `${listID}/${token}`,
      },
      {
        path: 'charles',
        pathMatch: 'full',
        component: PropertyCharlesComponent,
      },
      {
        path: ':listID/:token',
        resolve: { token: TokenResolver },
        children: [
          {
            path: '',
            component: PropertyListComponent,
          },
          {
            path: ':propertyID',
            component: PropertyDetailsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyRoutingModule {}
