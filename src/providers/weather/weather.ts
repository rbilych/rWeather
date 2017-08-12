import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
	apiKey = '328c648d6c5a8471';
	url;

  constructor(public http: Http) {
		this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
  }

	getWeather(city, country) {
		return this.http.get(this.url + '/' + country + '/' + city + '.json')
			.map(res => res.json());
	}

}
