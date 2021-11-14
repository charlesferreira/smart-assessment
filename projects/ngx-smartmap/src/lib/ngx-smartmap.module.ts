import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayerComponent } from './layer/layer.component';
import { MapComponent } from './map/map.component';
import { MapService } from './map/map.service';
import { SourceComponent } from './source/source.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MapComponent, SourceComponent, LayerComponent],
  exports: [MapComponent, SourceComponent, LayerComponent],
  providers: [MapService],
})
export class NgxSmartmapModule {}
