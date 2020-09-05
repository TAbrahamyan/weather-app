import { Injectable } from '@angular/core';

import { WeatherService } from './weather.service';

@Injectable({ providedIn: 'root' })

export class SearchWeatherService {
  constructor(private weatherService: WeatherService) { }

  stringMask = (inputValue: string): RegExp[] => [ ...inputValue ].map(() => /[a-zA-Z]/g);

  addCityHandler(): void {
    if (!this.weatherService.inputValue.trim()) {
      this.weatherService.validationText = 'Input should not be empty';

      return;
    }

    this.weatherService.fetchWeathers();
    this.weatherService.inputValue = '';
    this.weatherService.validationText = '';
  }

  clearListHandler(): void {
    this.weatherService.cities.length = 0;
    localStorage.removeItem('cities');
  }
}
