import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchWeatherComponent } from './components/search-weather/search-weather.component';
import { WeatherCardsComponent } from './components/wearher-cards/weather-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchWeatherComponent,
    WeatherCardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    TextMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
