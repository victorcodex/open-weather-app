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
  preferredCities: object;

  constructor(private openWeatherService: OpenWeatherService, private constants: Constants, private helpers: Helpers) {
    this.units = constants.OPEN_WEATHER_REQUEST_PARAMS.units;
    this.preferredCities = constants.SELECTED_CITIES;
    this.subscriptionManager = new Subscription();
  }

  ngOnInit() {
    this.getCurrentWeatherForCity();
    this.getWeatherForecastForCity();
  }

  /**
   * Get Current Weather for Cities
   */
  getCurrentWeatherForCity(): void {

    let currentWeatherSubscription: Subscription;

    for (const cityName in this.preferredCities) {

      if (this.preferredCities.hasOwnProperty(cityName)) {

        currentWeatherSubscription = this.openWeatherService.getCurrentWeatherForCity(
          cityName, this.units
        ).subscribe((response: OpenWeatherData) =>
          this.preferredCities[cityName].currentData = response
        );

      }

    }
    this.subscriptionManager.add(currentWeatherSubscription);

  }

  /**
   * Get Weather Forecast for Cities
   */
  getWeatherForecastForCity(): void {

    let weatherForecastSubscription: Subscription;

    for (const cityName in this.preferredCities) {

      if (this.preferredCities.hasOwnProperty(cityName)) {

        weatherForecastSubscription = this.openWeatherService.getWeatherForecastForCity(
          cityName, this.units
        ).subscribe((response: OpenWeatherDataForecast) =>
          this.preferredCities[cityName].forecastData = response
        );

      }

    }
    this.subscriptionManager.add(weatherForecastSubscription);

  }

  /**
   * Get Daily Weather Forecast for Cities
   */
  getDailyWeatherForecastForCity(): void {

    const dailyWeathersubscription = this.openWeatherService.getDailyWeatherForecastForCity(
      'London', this.units
    ).subscribe((response: OpenWeatherDataForecast) => {

    });
    this.subscriptionManager.add(dailyWeathersubscription);

  }

  ngOnDestroy(): void {
    this.subscriptionManager.unsubscribe();
  }

}
