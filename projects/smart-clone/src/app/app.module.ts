import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxSmartmapModule } from 'ngx-smartmap';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyModule } from './property/property.module';
import { LoadingStateInterceptor } from './services/loading-state-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { PropertyEffects } from './state/property/property.effects';
import { propertyReducer } from './state/property/property.reducer';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoadingStateInterceptor, multi: true },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    PropertyModule,
    NgxSmartmapModule,
    StoreModule.forRoot({ property: propertyReducer }),
    EffectsModule.forFeature([PropertyEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
