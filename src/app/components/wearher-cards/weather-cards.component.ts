import { Component } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { ICitiesInfo } from '../../interfaces';

@Component({
  selector: 'app-weather-cards',
  templateUrl: './weather-cards.component.html',
  styleUrls: [ '../../scss/app.scss' ]
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
          city.temp = Math.round((city.temp - 32) * 5 / 9);
          city.isCelsius = true;
        } else {
          city.temp = Math.round((city.temp * 9 / 5) + 32);
          city.isCelsius = false;
        }
      }

      return city;
    });
  }
}
