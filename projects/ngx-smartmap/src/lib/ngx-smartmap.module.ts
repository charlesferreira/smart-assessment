import { NgModule } from '@angular/core';

import { LayerComponent } from './layer/layer.component';
import { MapComponent } from './map/map.component';
import { SourceComponent } from './source/source.component';

@NgModule({
  declarations: [MapComponent, SourceComponent, LayerComponent],
  imports: [],
  exports: [MapComponent, SourceComponent, LayerComponent],
})
export class NgxSmartmapModule {}
