import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TeamdataService } from './teamdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Team Manager';

  constructor( private _route: ActivatedRoute, private _teamService: TeamdataService) { }

  ngOnInit() { }
}
