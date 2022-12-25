import { InjectionToken, Type } from '@angular/core';
import {
  TargetHandler,
  TargetsCreatorOptions,
  TargetsModuleOptions,
} from './types';

export const TARGET_HANDLERS = new InjectionToken<Type<TargetHandler>[][]>(
  'Target Handlers'
);

export const TARGETS_MODULE_OPTIONS = new InjectionToken<TargetsModuleOptions>(
  'Targets module Options'
);

export const DEFAULT_TARGETS_CREATOR_OPTIONS: TargetsCreatorOptions = {
  amount: 3,
  updateInterval: 1000,
  updateProbability: 100,
};
