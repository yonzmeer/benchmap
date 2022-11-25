import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumDirective } from './cesium.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CesiumDirective],
  exports: [CesiumDirective],
})
export class CesiumModule {}
