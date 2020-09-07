export interface ICitiesInfo {
  id: number;
  isCelsius: boolean;
  name: string;
  tempCelsius: number;
  tempFahrenheit: number;
  forecasts: {
    forecastTempTime: string;
    forecastTemp: number;
    forecastTempFahrenheit: number;
  };
}
