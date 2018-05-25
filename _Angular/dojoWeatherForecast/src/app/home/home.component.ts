import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../place';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  place: Place;
  idnum = 0;
  public places: Place[] = [];

  constructor( private _route: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit() {

    this.places = this._dataService.initialPlaces();

    console.log('places defined in Home Component:', this.places);
  }

}
