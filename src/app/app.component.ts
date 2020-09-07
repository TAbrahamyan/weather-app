import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';
import { ICitiesInfo } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    const savedCity: ICitiesInfo[] = JSON.parse(localStorage.getItem('cities'));

    if (savedCity) {
      this.weatherService.cities = savedCity;
    }
  }
}
