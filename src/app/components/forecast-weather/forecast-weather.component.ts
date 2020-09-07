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
  cloudImg: string;
  cloudWithSunImg: string;
  isCelsius: boolean;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
  ) {
    this.cloudImg = '../../../assets/img/cloud.png';
    this.cloudWithSunImg = '../../../assets//img/cloud-with-sun.png';
    this.isCelsius = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cities = this.weatherService.cities[+params.get('id')];
    });
  }

  isCelsiusHandler(isCelsius: boolean): void {
    if (isCelsius) {
      this.isCelsius = true;
    } else {
      this.isCelsius = false;
    }
  }
}
