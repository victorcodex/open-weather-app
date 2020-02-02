import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment as env } from './../../../environments/environment';
import { OpenWeatherData } from '../../interfaces/open-weather-data';
import { OpenWeatherDataForecast } from '../../interfaces/open-weather-data-forecast';
import { Helpers } from './../../config/helpers';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  /**
   * HTTP header config
   */
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient, private helpers: Helpers) {

  }


  /**
   * GET api.openweathermap.org/data/2.5/weather?q={city name}&appid={app id}&units={metric}
   */
  getCurrentWeatherForCity(cityName: string, units: string): Observable<OpenWeatherData> {
    return this.http
      .get<OpenWeatherData>(
        `weather?q=${cityName}&appid=${env.openWeatherDataAppId}&units=${units}`,
        this.httpOptions
      )
      .pipe(
        catchError(this.helpers.handleError),
        retry(2)
      );
  }

  /**
   * GET api.openweathermap.org/data/2.5/forecast?q={city name}&appid={app id}&units={metric}
   */
  getWeatherForecastForCity(cityName: string, units: string): Observable<OpenWeatherDataForecast> {
    return this.http
      .get<OpenWeatherDataForecast>(
        `forecast?q=${cityName}&appid=${env.openWeatherDataAppId}&units=${units}`,
        this.httpOptions
      )
      .pipe(
        catchError(this.helpers.handleError),
        retry(2)
      );
  }

  /**
   * GET api.openweathermap.org/data/2.5/forecast/daily?q={city name}&appid={app id}&units={metric}
   */
  getDailyWeatherForecastForCity(cityName: string, units: string): Observable<OpenWeatherDataForecast> {
    return this.http
      .get<OpenWeatherDataForecast>(
        `forecast/daily?q=${cityName}&appid=${env.openWeatherDataAppId}&units=${units}`,
        this.httpOptions
      )
      .pipe(
        catchError(this.helpers.handleError),
        retry(2)
      );
  }

}
