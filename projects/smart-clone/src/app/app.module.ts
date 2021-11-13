import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NgxSmartmapModule } from 'ngx-smartmap';

import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { propertiesReducer } from './shared/state/properties/properties.reducer';
import { propertyListsReducer } from './shared/state/property-lists/property-lists.reducer';

@NgModule({
  declarations: [AppComponent, PropertyListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgxSmartmapModule,
    StoreModule.forRoot({ propertyLists: propertyListsReducer, properties: propertiesReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
