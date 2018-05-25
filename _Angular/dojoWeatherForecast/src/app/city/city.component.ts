import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../place';

import { DataService } from '../data.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {
  id: number;
  selectedcity: Place;
  public places: Place[] = [];
  cityFound = false;
  message = '';

  constructor(private _route: ActivatedRoute, private _dataService: DataService ) {}

  ngOnInit() {

    this.places = this._dataService.getPlaces();

    console.log('places defined in City Component:', this.places);

    this._route.paramMap.subscribe( params => {
      this.id = parseInt(params.get('id'), 10);
      console.log('selected city id:', this.id);

      this.selectedcity = this.places[this.id];
      console.log('City Component selectedcity: ', this.selectedcity);
        // need to call service with API call here
      if ( this.selectedcity ) {

        this._dataService.getWeather(this.selectedcity.apiname)
        .subscribe(
          // handle success
          (response) => {
            console.log('Success! ', response);
            this.message = '';

            // assign new city properties
            this.selectedcity.humidity =   response['main'].humidity;
            this.selectedcity.temp_avg =   response['main'].temp;
            this.selectedcity.temp_low =   response['main'].temp_min;
            this.selectedcity.temp_high =   response['main'].temp_max;
            this.selectedcity.status =   response['weather']['0'].description;

            console.log('selectedcity found: ', this.selectedcity );

            // set success flag
            this.cityFound = true;
            },
          // handle failure
          (error) => {
            console.log('Error! ', error.json().message);
            this.message = `City ${ this.selectedcity.rtname } does not exist in weather service`;

            this.cityFound = false;
            });
          }
      });
    }

}
