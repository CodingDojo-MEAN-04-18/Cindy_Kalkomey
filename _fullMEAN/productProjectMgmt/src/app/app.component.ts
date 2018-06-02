
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Jams & Jellies! Project Product Management';

  constructor( private _route: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit() { }
}

