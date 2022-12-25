import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { providePluginProcessor } from '@benchmap/plugins';
import { TARGET_HANDLERS } from './config';
import { TargetHandlersProcessorService } from './target-handlers-processor.service';
import { TargetHandler } from './types';

@NgModule()
export class TargetsModule {
  static forRoot(): ModuleWithProviders<TargetsModule> {
    return {
      ngModule: TargetsModule,
      providers: [providePluginProcessor(TargetHandlersProcessorService)],
    };
  }

  static forFeature(
    targetHandlers: Type<TargetHandler>[]
  ): ModuleWithProviders<TargetsModule> {
    return {
      ngModule: TargetsModule,
      providers: [
        {
          provide: TARGET_HANDLERS,
          useValue: targetHandlers,
          multi: true,
        },
      ],
    };
  }
}
