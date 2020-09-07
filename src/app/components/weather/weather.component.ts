import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  template: `
    <div>
      <app-search-weather></app-search-weather>
      <app-weather-cards></app-weather-cards>
    </div>
  `
})

export class WeatherComponent { }
