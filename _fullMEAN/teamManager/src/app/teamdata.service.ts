import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

// import Angular blueprint for a player
import { ClientPlayer } from './client-player';


@Injectable({
  providedIn: 'root'
})
export class TeamdataService {

  player: ClientPlayer;

  players: ClientPlayer[] = [];
  // players = new BehaviorSubject([]);

// this must agree with what is included in server.js for routes -- server-side page routing
  private base = '/api/players';

  constructor( private _http: HttpClient ) { }

  getPlayers() {
    console.log('SERVICE in TeamdataService getPlayers');
    return this._http.get(this.base);
  }

  createPlayer(player: ClientPlayer) {
    console.log('SERVICE in TeamdataService ClientPlayer to add player: ', player);
    return this._http.post(this.base, player);
  }

  updatePlayer(_id: string, player: ClientPlayer) {
    console.log('SERVICE in TeamdataService updatePlayer to change player _id: ', _id, 'to be player:', player);

    console.log('SERVICE in TeamdataService updatePlayer is calling .put route $(this.base)/$(_id): ', `${this.base}/${_id}` );
    return this._http.put( `${this.base}/${_id}`,  player);
  }

  deletePlayer(_id: string): Observable<ClientPlayer> {
    console.log('SERVICE in TeamdataService deleteProduct to delete _id:', _id);
    console.log('SERVICE in TeamdataService deleteProduct is calling .delete route $(this.base)/$(_id): ', `${this.base}/${_id}` );

    return this._http.delete<ClientPlayer>( `${this.base}/${_id}` );
  }

  getPlayer(_id: string): Observable<ClientPlayer> {
    console.log('SERVICE in TeamdataService getPlayer (single) to get _id:', _id);
    console.log('SERVICE in TeamdataService getPlayer is calling .get route $(this.base)/$(_id): ', `${this.base}/${_id}` );
    return this._http.get<ClientPlayer>( `${this.base}/${_id}` );
  }

}
