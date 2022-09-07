import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { WeatherService } from '../../services/weather.service';
import { ICitiesInfo } from '../../interfaces';

@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: [ './search-weather.component.scss' ]
})
export class SearchWeatherComponent {
  constructor(public weatherService: WeatherService) { }

  addCity(): void {
    const weatherService: WeatherService = this.weatherService;
    const existedCity: boolean = weatherService.cities.some((city: ICitiesInfo): boolean => {
      return city.name.toLowerCase() === weatherService.inputValue.value.toLowerCase();
    });

    if (!weatherService.inputValue.value.trim()) {
      weatherService.validationText = 'Input should not be empty';
      return;
    }

    if (existedCity) {
      weatherService.validationText = `City ${weatherService.inputValue.value} already exists on the list`;
      return;
    }

    weatherService.fetchWeathers();
    weatherService.inputValue = new FormControl('');
    weatherService.validationText = '';
  }

  clearList(): void {
    this.weatherService.cities.length = 0;
    localStorage.removeItem('cities');
  }

  stringMask(inputValue: string): RegExp[] {
    return [...inputValue].map(() => /[a-zA-Z ]/g)
  };

}
