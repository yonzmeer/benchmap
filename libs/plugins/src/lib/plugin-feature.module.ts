import { NgModule, NgModuleRef } from '@angular/core';
import { PluginRootModule } from './plugin-root.module';

@NgModule()
export class PluginFeatureModule {
  constructor(moduleRef: NgModuleRef<unknown>, root: PluginRootModule) {
    root.registerFeature(moduleRef);
  }
}
