import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientPlayer } from '../../client-player';
import { TeamdataService } from '../../teamdata.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  player: ClientPlayer = new ClientPlayer();
  allPlayers: ClientPlayer[] = [];
  game_num = '1';

  constructor( private _teamservice: TeamdataService, private _route: ActivatedRoute ) {

    // call on ActivatedRoute to get game number from the current route /status/game/:id
    this._route.paramMap.subscribe( params => {
      this.game_num = params.get('id');
      console.log('in game.component w this.game_num =', this.game_num);
    });

  }

  ngOnInit() {

    this._teamservice.getPlayers()
    .subscribe(
     (response: any) => {
       this.allPlayers = response;
       console.log('list.component.ts call _teamservice.getPlayers() allPlayers=response:', this.allPlayers);
     },
     (err) => {
       console.log('list.component.ts call _teamservice.getPlayers() error:', err);
     }
   );
  }

  changeStatus(p: ClientPlayer, game_num: string, status: string) {

    // set this.player to player object returned via changeStatus
    this.player = p;

    // update player's status for game game_num

    if (game_num === '1') {
      this.player.game1_status = status;
    } else if (game_num === '2') {
      this.player.game2_status = status;
    } else {
      this.player.game3_status = status;
    }

    // call _teamservice.updatePlayer to update player in db
    this._teamservice.updatePlayer(p._id, this.player).subscribe(
      () => {
        // update player status in allPlayers
        // first get index of player in allPlayers

        const idx = this.allPlayers.findIndex( found_player => found_player._id === p._id);

        // then set that player index (if the player was found in allPlayers) to updated this.player
        if ( idx > 0 ) {
          this.allPlayers[idx] = this.player;
        }

        // reset this.player for next changeStatus
        this.player = new ClientPlayer();
      });

  }
}
