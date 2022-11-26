import { NgModule } from '@angular/core';
import { PluginsModule } from '@benchmap/plugins';

@NgModule({
  imports: [
    PluginsModule.forRoot(
      [
        {
          name: 'cesium',
          loadChildren: () =>
            import('@benchmap/cesium').then((m) => m.CesiumModule),
        },
      ],
      { lazyLoadImmediately: false }
    ),
  ],
})
export class AppPluginsModule {}
