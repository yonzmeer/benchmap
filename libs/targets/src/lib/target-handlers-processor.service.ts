import { Injectable, NgModuleRef } from '@angular/core';
import { MaybeAsync, PluginProcessor } from '@benchmap/plugins';
import { TARGET_HANDLERS } from './config';
import { TargetsService } from './targets.service';

@Injectable()
export class TargetHandlersProcessorService implements PluginProcessor {
  constructor(private targetsService: TargetsService) {}

  process(moduleRef: NgModuleRef<unknown>): MaybeAsync<void> {
    const targetHandlers = moduleRef.injector.get(TARGET_HANDLERS);

    flatten(targetHandlers)
      .map((provider) => moduleRef.injector.get(provider))
      .forEach((targetHandler) => this.targetsService.add(targetHandler));
  }
}

function flatten<T>(arr: T[][]): T[] {
  return Array.prototype.concat.apply([], arr);
}
