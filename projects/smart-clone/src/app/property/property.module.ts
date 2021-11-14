import { CommonModule, I18nPluralPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@smart-clone/shared/shared.module';

import { GeojsonPipe } from './pipes/geojson.pipe';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { PropertyListTitlePipe } from './pipes/property-list-title.pipe';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyListBodyComponent } from './property-list/property-list-body/property-list-body.component';
import { PropertyListHeaderComponent } from './property-list/property-list-header/property-list-header.component';
import { PropertyListItemComponent } from './property-list/property-list-item/property-list-item.component';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [
    PropertyListComponent,
    PropertyDetailsComponent,
    GeojsonPipe,
    PropertyListTitlePipe,
    PluralizePipe,
    PropertyListHeaderComponent,
    PropertyListBodyComponent,
    PropertyListItemComponent,
  ],
  exports: [PropertyListComponent],
  providers: [I18nPluralPipe],
})
export class PropertyModule {}
