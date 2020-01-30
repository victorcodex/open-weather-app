/**
 * Open Weather Data Forecast interface/model
 */
export interface OpenWeatherDataForecast {
    cod: string;
    message: number;
    cnt: number;
    list: Array<object>;
    city: object;
}
