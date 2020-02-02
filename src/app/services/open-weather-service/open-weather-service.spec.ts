import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment as env } from './../../../environments/environment';
import { OpenWeatherService } from './open-weather-service';
import { Constants } from './../../config/constants';
import { OpenWeatherData } from './../../interfaces/open-weather-data';
import { OpenWeatherDataForecast } from './../../interfaces/open-weather-data-forecast';
import { Helpers } from './../..//config/helpers';


/**
 * Open Weather Data Service Tests
 */
describe('Open Weather Data Service', () => {

  let injector: TestBed;
  let service: OpenWeatherService;
  let httpMock: HttpTestingController;
  const constants = new Constants();
  const {
    cityName,
    units,
  } = constants.OPEN_WEATHER_REQUEST_PARAMS;

  /**
   * Setup TestBed config
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        OpenWeatherService,
        Helpers,
      ]
    });

    injector = getTestBed();
    service = injector.get(OpenWeatherService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Open Weather Data Service should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * GET api.openweathermap.org/data/2.5/weather?q={city name}&appid={app id}&units={metric}
   */
  describe(`#getCurrentWeatherForCity(${cityName}, ${units})`, () => {
    it(`should get current weather for city name "${cityName}" via GET and should return Observable<OpenWeatherData>`, () => {

      const dummyOpenWeatherData: OpenWeatherData = constants.OPEN_WEATHER_MOCK_DATA;

      service.getCurrentWeatherForCity(cityName, units).subscribe((result: OpenWeatherData) => {
        expect(result).toEqual(dummyOpenWeatherData);
      });

      const req = httpMock.expectOne(
        `weather?q=${cityName}&appid=${env.openWeatherDataAppId}&units=${units}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyOpenWeatherData);

    });
  });

  /**
   * GET api.openweathermap.org/data/2.5/forecast?q={city name}&appid={app id}&units={metric}
   */
  describe(`#getWeatherForecastForCity(${cityName}, ${units})`, () => {
    it(`should get weather forecast for city name "${cityName}" via GET and should return Observable<OpenWeatherDataForecast>`, () => {

      const dummyOpenWeatherForecastData: OpenWeatherDataForecast = constants.OPEN_WEATHER_FORECAST_MOCK_DATA;

      service.getWeatherForecastForCity(cityName, units).subscribe((result: OpenWeatherDataForecast) => {
        expect(result).toEqual(dummyOpenWeatherForecastData);
      });

      const req = httpMock.expectOne(
        `forecast?q=${cityName}&appid=${env.openWeatherDataAppId}&units=${units}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyOpenWeatherForecastData);

    });
  });

  /**
   * GET api.openweathermap.org/data/2.5/forecast/daily?q={city name}&appid={app id}&units={metric}
   */
  describe(`#getWeatherForecastForCity(${cityName}, ${units})`, () => {
    it(`should get daily weather forecast for city name "${cityName}" via GET and should return Observable<OpenWeatherDataForecast>`,
      () => {

        const dummyOpenWeatherDailyForecastData: OpenWeatherDataForecast = constants.OPEN_WEATHER_FORECAST_MOCK_DATA;

        service.getDailyWeatherForecastForCity(cityName, units).subscribe((result: OpenWeatherDataForecast) => {
          expect(result).toEqual(dummyOpenWeatherDailyForecastData);
        });

        const req = httpMock.expectOne(
          `forecast/daily?q=${cityName}&appid=${env.openWeatherDataAppId}&units=${units}`
        );
        expect(req.request.method).toBe('GET');
        req.flush(dummyOpenWeatherDailyForecastData);

      });
  });

});
