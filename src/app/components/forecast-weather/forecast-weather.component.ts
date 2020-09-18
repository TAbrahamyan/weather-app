import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WeatherService } from '../..//services/weather.service';
import { ICitiesInfo } from '../../interfaces';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: [ './forecast-weather.component.scss' ]
})

export class ForecastWeatherComponent implements OnInit {
  cities: ICitiesInfo;
  cloudImg: string = '../../../assets/img/cloud.png';
  cloudWithSunImg: string = '../../../assets//img/cloud-with-sun.png';
  isCelsius: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cities = this.weatherService.cities.find((city: ICitiesInfo): boolean => city.name === params.get('name'));
    });
  }

  isCelsiusHandler(isCelsius: boolean): void {
    if (isCelsius) {
      this.isCelsius = isCelsius;
    } else {
      this.isCelsius = isCelsius;
    }
  }
}
