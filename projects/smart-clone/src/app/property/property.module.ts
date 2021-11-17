import { CommonModule, I18nPluralPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PropertyEffects } from '@smart-clone/property/state/property.effects';
import { propertyReducer } from '@smart-clone/property/state/property.reducer';
import { httpInterceptorProviders } from '@smart-clone/shared/services/http-interceptors';
import { SharedModule } from '@smart-clone/shared/shared.module';
import { NgxSmartmapModule } from 'ngx-smartmap';

import { PropertyMapNavComponent } from './components/map/property-map/property-map-nav/property-map-nav.component';
import { PropertyMapComponent } from './components/map/property-map/property-map.component';
import { PropertyCharlesComponent } from './components/sidebar/property-charles/property-charles.component';
import {
  PropertyDetailsBodyOverviewComponent,
} from './components/sidebar/property-details/property-details-body/property-details-body-overview/property-details-body-overview.component';
import {
  PropertyDetailsBodyPlansComponent,
} from './components/sidebar/property-details/property-details-body/property-details-body-plans/property-details-body-plans.component';
import {
  PropertyDetailsBodyComponent,
} from './components/sidebar/property-details/property-details-body/property-details-body.component';
import {
  PropertyDetailsHeaderComponent,
} from './components/sidebar/property-details/property-details-header/property-details-header.component';
import {
  PropertyDetailsPhotosComponent,
} from './components/sidebar/property-details/property-details-photos/property-details-photos.component';
import { PropertyDetailsComponent } from './components/sidebar/property-details/property-details.component';
import {
  PropertyListBodyComponent,
} from './components/sidebar/property-list/property-list-body/property-list-body.component';
import {
  PropertyListHeaderComponent,
} from './components/sidebar/property-list/property-list-header/property-list-header.component';
import {
  PropertyListItemComponent,
} from './components/sidebar/property-list/property-list-item/property-list-item.component';
import { PropertyListComponent } from './components/sidebar/property-list/property-list.component';
import { GeojsonPipe } from './pipes/geojson.pipe';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { PropertyListTitlePipe } from './pipes/property-list-title.pipe';
import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property.component';
import { PropertyService } from './services/property.service';

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
    PropertyComponent,
    PropertyCharlesComponent,
    PropertyMapNavComponent,
  ],
  exports: [PropertyListComponent, PropertyMapComponent, GeojsonPipe],
  providers: [httpInterceptorProviders, I18nPluralPipe, PropertyService],
})
export class PropertyModule {}
