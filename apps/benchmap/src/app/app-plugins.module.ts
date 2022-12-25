import { NgModule } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PluginsModule } from '@benchmap/plugins';
import {
  TargetsModuleOptions,
  TARGETS_MODULE_OPTIONS,
} from '@benchmap/targets';
import { filter, map } from 'rxjs';

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
  providers: [
    {
      provide: TARGETS_MODULE_OPTIONS,
      useFactory: (router: Router): TargetsModuleOptions => ({
        activeHandlerName$: router.events.pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => router.url.substring(1))
        ),
      }),
      deps: [Router],
    },
  ],
})
export class AppPluginsModule {}
