import { Injectable } from '@angular/core';

import { WeatherService } from './weather.service';

@Injectable({ providedIn: 'root' })

export class SearchWeatherService {
  constructor(private weatherService: WeatherService) { }

  stringMask = (inputValue: string): RegExp[] => [ ...inputValue ].map(() => /[a-zA-Z]/g);

  clearListHandler(): void {
    this.weatherService.cities.length = 0;
    localStorage.removeItem('cities');
  }

  addCityHandler(): void {
    const weatherService: WeatherService = this.weatherService;
    const existedCity: boolean = weatherService.cities.some(({ name }) => name.toLowerCase() === weatherService.inputValue.toLowerCase());

    if (!weatherService.inputValue.trim()) {
      weatherService.validationText = 'Input should not be empty';
      return;
    }

    if (existedCity) {
      weatherService.validationText = `City ${weatherService.inputValue} already exists on the list`;
      return;
    }

    weatherService.fetchWeathers();
    weatherService.inputValue = '';
    weatherService.validationText = '';
  }
}
