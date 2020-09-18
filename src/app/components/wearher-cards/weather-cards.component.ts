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
  cloudWithSunImg: string = '../../../assets//img/cloud-with-sun.png';

  constructor(public weatherService: WeatherService) { }

  isCelsiusHandler(cityIndex: number, isCelsius: boolean): void {
    this.weatherService.cities.map((city: ICitiesInfo, index: number): ICitiesInfo => {
      if (index === cityIndex) {
        if (isCelsius) {
          city.isCelsius = isCelsius;
        } else {
          city.isCelsius = isCelsius;
        }
      }

      return city;
    });
  }
}
