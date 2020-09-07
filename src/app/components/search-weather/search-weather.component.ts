import { Component } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { SearchWeatherService } from '../../services/search-weather.service';

@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: [ './search-weather.component.scss' ]
})

export class SearchWeatherComponent {
  constructor(
    public weatherService: WeatherService,
    public searchWeatherService: SearchWeatherService,
  ) { }
}
