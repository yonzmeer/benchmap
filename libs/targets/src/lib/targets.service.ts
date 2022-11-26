import { Injectable } from '@angular/core';
import { TargetHandler } from './types';

@Injectable({
  providedIn: 'root',
})
export class TargetsService {
  add(targetHandler: TargetHandler): void {
    console.log(targetHandler);
  }
}
