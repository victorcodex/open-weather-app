import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { OpenWeatherService } from './../../services/open-weather-service/open-weather-service';
import { OpenWeatherData } from './../../interfaces/open-weather-data';
import { OpenWeatherDataForecast } from './../../interfaces/open-weather-data-forecast';
import { Constants } from './../../config/constants';
import { Helpers } from './../../config/helpers';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscriptionManager: Subscription;
  units: string;

  constructor(private openWeatherService: OpenWeatherService, private constants: Constants, private helpers: Helpers) {
    this.units = constants.OPEN_WEATHER_REQUEST_PARAMS.units;
    this.subscriptionManager = new Subscription();
  }

  ngOnInit() {
    this.getDailyWeatherForecastForCity();
  }

  /**
   * Get Current Weather for Cities
   */
  getCurrentWeatherForCity(): void {

    const currentWeatherSubscription = this.openWeatherService.getCurrentWeatherForCity(
      'London', this.units
    ).subscribe((response: OpenWeatherData) => {
      console.log('getCurrentWeatherForCity ', response);
    });
    this.subscriptionManager.add(currentWeatherSubscription);

  }

  /**
   * Get Weather Forecast for Cities
   */
  getWeatherForecastForCity(): void {

    const weatherForecastSubscription = this.openWeatherService.getWeatherForecastForCity(
      'London', this.units
    ).subscribe((response: OpenWeatherDataForecast) => {
      console.log('getWeatherForecastForCity ', response);
    });
    this.subscriptionManager.add(weatherForecastSubscription);

  }

  /**
   * Get Daily Weather Forecast for Cities
   */
  getDailyWeatherForecastForCity(): void {

    const dailyWeathersubscription = this.openWeatherService.getDailyWeatherForecastForCity(
      'London', this.units
    ).subscribe((response: OpenWeatherDataForecast) => {
      console.log('getDailyWeatherForecastForCity ', response);
    });
    this.subscriptionManager.add(dailyWeathersubscription);

  }

  ngOnDestroy(): void {
    this.subscriptionManager.unsubscribe();
  }

}
