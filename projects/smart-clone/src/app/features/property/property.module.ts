import { CommonModule, I18nPluralPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { httpInterceptorProviders } from '@smart-clone/http-interceptors';
import { SharedModule } from '@smart-clone/shared/shared.module';
import { PropertyEffects } from '@smart-clone/state/property/property.effects';
import { propertyReducer } from '@smart-clone/state/property/property.reducer';
import { NgxSmartmapModule } from 'ngx-smartmap';

import { GeojsonPipe } from './pipes/geojson.pipe';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { PropertyListTitlePipe } from './pipes/property-list-title.pipe';
import {
  PropertyDetailsBodyOverviewComponent,
} from './property-details/property-details-body/property-details-body-overview/property-details-body-overview.component';
import {
  PropertyDetailsBodyPlansComponent,
} from './property-details/property-details-body/property-details-body-plans/property-details-body-plans.component';
import { PropertyDetailsBodyComponent } from './property-details/property-details-body/property-details-body.component';
import {
  PropertyDetailsHeaderComponent,
} from './property-details/property-details-header/property-details-header.component';
import {
  PropertyDetailsPhotosComponent,
} from './property-details/property-details-photos/property-details-photos.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyListBodyComponent } from './property-list/property-list-body/property-list-body.component';
import { PropertyListHeaderComponent } from './property-list/property-list-header/property-list-header.component';
import { PropertyListItemComponent } from './property-list/property-list-item/property-list-item.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyMapComponent } from './property-map/property-map.component';
import { PropertyRoutingModule } from './property-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PropertyRoutingModule,
    SharedModule,
    NgxSmartmapModule,
    StoreModule.forFeature('property', propertyReducer),
    EffectsModule.forFeature([PropertyEffects]),
  ],
  declarations: [
    PropertyListComponent,
    PropertyDetailsComponent,
    GeojsonPipe,
    PropertyListTitlePipe,
    PluralizePipe,
    PropertyListHeaderComponent,
    PropertyListBodyComponent,
    PropertyListItemComponent,
    PropertyDetailsHeaderComponent,
    PropertyDetailsBodyComponent,
    PropertyDetailsBodyPlansComponent,
    PropertyDetailsBodyOverviewComponent,
    PropertyDetailsPhotosComponent,
    PropertyMapComponent,
  ],
  exports: [PropertyListComponent, PropertyMapComponent, GeojsonPipe],
  providers: [httpInterceptorProviders, I18nPluralPipe],
})
export class PropertyModule {}
