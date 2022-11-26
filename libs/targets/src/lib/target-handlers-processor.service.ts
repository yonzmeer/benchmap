import { Injectable, NgModuleRef } from '@angular/core';
import { MaybeAsync, PluginProcessor } from '@benchmap/plugins';
import { TARGET_HANDLERS } from './config';
import { TargetsService } from './targets.service';

@Injectable({
  providedIn: 'root',
})
export class TargetHandlersProcessorService implements PluginProcessor {
  constructor(private targetsService: TargetsService) {
    console.log('oof');
  }

  process(moduleRef: NgModuleRef<any>): MaybeAsync<void> {
    console.log(moduleRef);

    const targetHandlers = moduleRef.injector.get(TARGET_HANDLERS);

    flatten(targetHandlers)
      .map((provider) => moduleRef.injector.get(provider))
      .forEach((targetHandler) => this.targetsService.add(targetHandler));
  }
}

function flatten<T>(arr: T[][]): T[] {
  return Array.prototype.concat.apply([], arr);
}
