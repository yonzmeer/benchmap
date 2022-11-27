import { Injectable } from '@angular/core';
import { Target, TargetHandler } from '@benchmap/targets';

@Injectable({
  providedIn: 'root',
})
export class CesiumTargetHandlerService implements TargetHandler {
  name = 'cesium';

  handle(target: Target): void {
    console.log(target);
  }
}
