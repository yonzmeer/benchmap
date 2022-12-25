import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CesiumComponent } from '@benchmap/cesium';

@NgModule({
  imports: [
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
  exports: [RouterModule],
})
export class AppRoutingModule {}
