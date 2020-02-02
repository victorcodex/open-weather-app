import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OpenWeatherService } from './services/open-weather-service/open-weather-service';
import { Helpers } from './config/helpers';
import { Constants } from './config/constants';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    OpenWeatherService,
    Helpers,
    Constants,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
