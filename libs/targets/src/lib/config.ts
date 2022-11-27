import { InjectionToken, Type } from '@angular/core';
import { TargetHandler, TargetsModuleOptions } from './types';

export const TARGET_HANDLERS = new InjectionToken<Type<TargetHandler>[][]>(
  'Target Handlers'
);

export const TARGETS_MODULE_OPTIONS = new InjectionToken<TargetsModuleOptions>(
  'Targets module Options'
);
