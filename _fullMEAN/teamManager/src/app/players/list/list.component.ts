import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientPlayer } from '../../client-player';
import { TeamdataService } from '../../teamdata.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  player: ClientPlayer = new ClientPlayer();
  allPlayers: ClientPlayer[] = [];

  constructor( private _teamservice: TeamdataService, private _router: Router ) {
  }

  ngOnInit() {
    this.getSlate();
  }

  getSlate() {
    this._teamservice.getPlayers()
    .subscribe(
     (response: any) => {
       console.log('list.component.ts call _teamservice.getPlayers() and got response', response);

       this.allPlayers = response;
       console.log('list.component.ts call _teamservice.getPlayers() allPlayers:', this.allPlayers);
     },
     (err) => {
       console.log('list.component.ts call _teamservice.getPlayers() error:', err);
     }
   );
  }

  deleteP(id, name) {

    console.log('in list.component deletePlayer with player._id: ', id);

    // display confirm window
    const yesdelete = window.confirm(`Do you really want to delete player ${name}?`);

    // if user clicks yes in confirm window
    if (yesdelete) {
      // on click of delete button  call _teamservice to delete product with product.id from db
      this._teamservice.deletePlayer(id).subscribe(
        () => {
          // filter out deleted player in allPlayers
          this.allPlayers = this.allPlayers.filter( player => player._id !== id);
          });

       // if user clicks cancel in confirm window
      } else {
        console.log('in list.component deletePlayer window yesdelete and user cancelled, so do nothing');
        }
    }

}

