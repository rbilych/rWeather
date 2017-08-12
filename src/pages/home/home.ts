import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	weather:any;
	location: {
		city:string,
		country:string
	}

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider) {
  }

	ionViewWillEnter() {
		this.location = {
			city: 'Sambir',
			country: 'UA'
		}

		this.weatherProvider.getWeather(this.location.city, this.location.country).subscribe(weather => {
			this.weather = weather.current_observation;
		});
	}

}
