import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ForecastWeatherComponent } from './components/forecast-weather/forecast-weather.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchWeatherComponent } from './components/search-weather/search-weather.component';
import { WeatherCardsComponent } from './components/wearher-cards/weather-cards.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForecastWeatherComponent,
    WeatherComponent,
    SearchWeatherComponent,
    WeatherCardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TextMaskModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
