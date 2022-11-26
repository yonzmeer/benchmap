import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PluginsModule } from '@benchmap/plugins';
import { TargetsModule } from '@benchmap/targets';
import { CesiumTargetHandlerService } from './cesium-target-handler.service';
import { CesiumComponent } from './cesium.component';
import { CesiumDirective } from './cesium.directive';

@NgModule({
  imports: [
    CommonModule,
    PluginsModule.forFeature(),
    TargetsModule.forFeature([CesiumTargetHandlerService]),
  ],
  declarations: [CesiumDirective, CesiumComponent],
  exports: [CesiumDirective, CesiumComponent],
})
export class CesiumModule {}
