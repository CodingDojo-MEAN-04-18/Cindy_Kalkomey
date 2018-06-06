import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TeamdataService } from '../teamdata.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor( private _route: ActivatedRoute, private _teamService: TeamdataService) { }

  ngOnInit() {
  }

}
