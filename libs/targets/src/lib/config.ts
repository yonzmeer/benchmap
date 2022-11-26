import { InjectionToken, Type } from '@angular/core';
import { TargetHandler } from './types';

export const TARGET_HANDLERS = new InjectionToken<Type<TargetHandler>[][]>(
  'Target Handlers'
);
