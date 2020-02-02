import {Injectable} from '@angular/core';

@Injectable()
export class Constants {

    OPEN_WEATHER_REQUEST_PARAMS = {
        cityName: 'London',
        units: 'metric',
    };

    OPEN_WEATHER_MOCK_DATA = {
        coord: {
            lon: -0.13,
            lat: 51.51
        },
        weather: [
            {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04d'
            }
        ],
        base: 'stations',
        main: {
            temp: 12.17,
            feels_like: 6.1,
            temp_min: 11,
            temp_max: 13.33,
            pressure: 1008,
            humidity: 71
        },
        visibility: 10000,
        wind: {
            speed: 7.7,
            deg: 280
        },
        rain: {

        },
        clouds: {
            all: 75
        },
        dt: 1580654874,
        sys: {
            type: 1,
            id: 1502,
            country: 'GB',
            sunrise: 1580629101,
            sunset: 1580662192
        },
        timezone: 0,
        id: 2643743,
        name: 'London',
        cod: 200
    };

    OPEN_WEATHER_FORECAST_MOCK_DATA = {
        cod: '',
        message: 205,
        cnt: 2,
        list: [
            {}
        ],
        city: {},
    };

}
