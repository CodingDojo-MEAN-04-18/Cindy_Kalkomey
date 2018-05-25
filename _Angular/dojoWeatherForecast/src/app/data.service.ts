import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { BehaviorSubject } from 'rxjs';

import { Place } from './place';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  place: Place;
  idnum = 0;
  places: Place[] = [];
  apiRoot = 'http://api.openweathermap.org/data/2.5/weather';
  apiKey = '734ebb188ed98cd2c506b595a3523a3c';

  constructor( private _http: Http ) { }


initialPlaces() {

  this.place = new Place();
  this.place.id = this.idnum;
  this.place.name = 'Seattle, WA';
  this.place.image = 'seattle.jpg';
  this.place.rtname = 'seattle';
  this.place.apiname = 'Seattle';
  this.places.push(this.place);

  this.idnum++;
  this.place = new Place();
  this.place.id = this.idnum;
  this.place.name = 'San Jose, CA';
  this.place.image = 'sanjose.jpg';
  this.place.rtname = 'sanjose';
  this.place.apiname = 'San Jose';
  this.places.push(this.place);

  this.idnum++;
  this.place = new Place();
  this.place.id = this.idnum;
  this.place.name = 'Burbank, CA';
  this.place.image = 'burbank.jpg';
  this.place.rtname = 'burbank';
  this.place.apiname = 'Burbank';
  this.places.push(this.place);

  this.idnum++;
  this.place = new Place();
  this.place.id = this.idnum;
  this.place.name = 'Dallas, TX';
  this.place.image = 'dallas.jpg';
  this.place.rtname = 'dallas';
  this.place.apiname = 'Dallas';
  this.places.push(this.place);

  this.idnum++;
  this.place = new Place();
  this.place.id = this.idnum;
  this.place.name = 'Washington, DC';
  this.place.image = 'dc.jpg';
  this.place.rtname = 'dc';
  this.place.apiname = 'Washington, D. C.';
  this.places.push(this.place);

  this.idnum++;
  this.place = new Place();
  this.place.id = this.idnum;
  this.place.name = 'Chicago, IL';
  this.place.image = 'chicago.jpg';
  this.place.rtname = 'chicago';
  this.place.apiname = 'Chicago';
  this.places.push(this.place);

  console.log('places defined in DataService:', this.places);

  return this.places;
  }

  getPlaces() {
    return this.places;
  }

  getWeather(cityname: string) {
    console.log('in getWeather function with cityname: ', cityname);
    const apiURL = `${this.apiRoot}?q=${ cityname }&APPID=${this.apiKey}&units=imperial`;
    console.log('in getWeather apiURL: ', apiURL);

    // angular5 requires .pipe( map() ) instead of .map
    return this._http.get(apiURL).pipe(map( response => response.json() ));

  }

}
