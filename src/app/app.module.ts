import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { OpenWeatherService } from './services/open-weather-service/open-weather-service';
import { Helpers } from './config/helpers';
import { Constants } from './config/constants';
import { HomeComponent } from './components/home/home.component';
import { ObjectKeyPipe } from './pipes/object-key';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObjectKeyPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [
    OpenWeatherService,
    Helpers,
    Constants,
  ],
  bootstrap: [
    AppComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
