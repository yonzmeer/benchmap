import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TargetsModule } from '@benchmap/targets';
import { AppPluginsModule } from './app-plugins.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppPluginsModule,
    TargetsModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
