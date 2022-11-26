import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumDirective } from './cesium.directive';
import { CesiumComponent } from './cesium.component';
import { TargetsModule } from '@benchmap/targets';
import { CesiumTargetHandlerService } from './cesium-target-handler.service';

@NgModule({
  imports: [
    CommonModule,
    TargetsModule.forFeature([CesiumTargetHandlerService]),
  ],
  declarations: [CesiumDirective, CesiumComponent],
  exports: [CesiumDirective, CesiumComponent],
})
export class CesiumModule {}
