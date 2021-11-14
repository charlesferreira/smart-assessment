import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@smart-clone/shared/shared.module';

import { GeojsonPipe } from './pipes/geojson.pipe';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  declarations: [PropertyListComponent, GeojsonPipe],
  exports: [PropertyListComponent],
  imports: [CommonModule, SharedModule],
})
export class PropertyModule {}
