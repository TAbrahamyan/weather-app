import { Component } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { ICitiesInfo } from '../../interfaces';

@Component({
  selector: 'app-weather-cards',
  templateUrl: './weather-cards.component.html',
  styleUrls: [ './weather-cards.component.scss' ]
})

export class WeatherCardsComponent {
  cloudImg: string;
  cloudWithSunImg: string;

  constructor(public weatherService: WeatherService) {
    this.cloudImg = '../../../assets//img/cloud.png';
    this.cloudWithSunImg = '../../../assets//img/cloud-with-sun.png';
  }

  isCelsiusHandler(cityIndex: number, isCelsius: boolean): void {
    this.weatherService.cities.map((city: ICitiesInfo, index: number) => {
      if (index === cityIndex) {
        if (isCelsius) {
          city.isCelsius = true;
        } else {
          city.isCelsius = false;
        }
      }

      return city;
    });
  }
}
