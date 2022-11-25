import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CesiumComponent } from '@benchmap/cesium';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
