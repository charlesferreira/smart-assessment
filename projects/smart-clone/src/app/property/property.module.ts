import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@smart-clone/shared/shared.module';

import { GeojsonPipe } from './pipes/geojson.pipe';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyListTitlePipe } from './pipes/property-list-title.pipe';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [PropertyListComponent, PropertyDetailsComponent, GeojsonPipe, PropertyListTitlePipe],
  exports: [PropertyListComponent],
})
export class PropertyModule {}
