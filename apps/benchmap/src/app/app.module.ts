import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CesiumModule } from '@benchmap/cesium';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CesiumModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
