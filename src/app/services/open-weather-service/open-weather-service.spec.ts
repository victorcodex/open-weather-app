import { TestBed } from '@angular/core/testing';

import { OpenWeatherService } from './open-weather-service';

describe('OpenWeatherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenWeatherService = TestBed.get(OpenWeatherService);
    expect(service).toBeTruthy();
  });
});
