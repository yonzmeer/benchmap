import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CesiumComponent } from '@benchmap/cesium';
import { PluginsModule } from '@benchmap/plugins';
import { TargetsModule } from '@benchmap/targets';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
    TargetsModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'cesium',
        component: CesiumComponent,
        loadChildren: () =>
          import('@benchmap/cesium').then((m) => m.CesiumModule),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
