import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumDirective } from './cesium.directive';
import { CesiumComponent } from './cesium.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CesiumDirective, CesiumComponent],
  exports: [CesiumDirective, CesiumComponent],
})
export class CesiumModule {}
