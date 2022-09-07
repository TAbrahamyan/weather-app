import { Component } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { ICitiesInfo } from '../../interfaces';

@Component({
  selector: 'app-weather-cards',
  templateUrl: './weather-cards.component.html',
  styleUrls: [ './weather-cards.component.scss' ]
})

export class WeatherCardsComponent {
  cloudImg: string = '../../../assets//img/cloud.png';
  cloudWithSunImg: string = '../../../assets//img/cloud_with_sun.png';

  constructor(public weatherService: WeatherService) { }

  isCelsiusHandler(cityIndex: number, isCelsius: boolean): void {
    this.weatherService.cities.map((city: ICitiesInfo): ICitiesInfo => {
      if (city.id === cityIndex) {
        city.isCelsius = isCelsius;
      }

      return city;
    });
  }
}
