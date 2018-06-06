import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ClientPlayer } from '../../client-player';
import { TeamdataService } from '../../teamdata.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  player: ClientPlayer = new ClientPlayer();

  constructor( private _router: Router, private _teamService: TeamdataService) { }

  ngOnInit() {
  }

  onSubmit(event: Event, formData: NgForm) {

    event.preventDefault();
    console.log('in addplayer component onSubmit with new player: ', this.player);

    // on submit of form, call _teamService.createPlayer to add new product to db
    this._teamService.createPlayer(this.player).subscribe();

    // reset the product for next createProduct
    this.player = new ClientPlayer();

    // redirect to player listing route
    this._router.navigateByUrl('/players/list');
  }

// helper function for perferred position seletion - forward, midfielder, defender, sweeper, or goalkeeper
  soccerPositions() {
    const positions: string[] = [];
    positions[0] = 'Defender';
    positions[1] = 'Forward';
    positions[2] = 'Goalkeeper';
    positions[3] = 'Midfielder';
    positions[4] = 'Sweeper';
    return positions;
    }

}

