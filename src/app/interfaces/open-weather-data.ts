/**
 * Open Weather Data module interface/model
 */
export interface OpenWeatherData {
    coord: object;
    weather: Array<object>;
    base: string;
    main: object;
    visibility: number;
    wind: object;
    rain: object;
    clouds: object;
    dt: number;
    sys: object;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
