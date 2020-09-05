import { Injectable } from '@angular/core';

import { ICitiesInfo } from '../interfaces';

@Injectable({ providedIn: 'root' })

export class WeatherService {
  inputValue: string = '';
  validationText: string = '';
  cities: ICitiesInfo[] = [];

  async fetchWeathers(): Promise<void> {
    try {
      let response: Response;
      if (location.protocol === 'http:') {
        response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&units=metric&APPID=434aaa551c8218a43b2c291d6e2ca8bc`);
      } else {
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&units=metric&APPID=434aaa551c8218a43b2c291d6e2ca8bc`);
      }

      const data: any = await response.json();

      if (data.message) {
        this.validationText = 'City not found';

        return;
      }

      this.cities.push({
        id: Date.now(),
        temp: Math.round(data.main.temp),
        name: data.name,
        isCelsius: true,
      });

      localStorage.setItem('cities', JSON.stringify(this.cities));
    } catch (e) {
      console.error('E:', e);
    }
  }
}
