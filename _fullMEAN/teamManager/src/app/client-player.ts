// Angular blueprint for  single player.
// I think it's important to name the attributes the same to allow for ease in sending json response directly to database

export class ClientPlayer {
  _id: string;
  player_name: string;
  pref_position: string;
  game1_status:  string;
  game2_status:  string;
  game3_status:  string;

  constructor() {
    this.player_name = '';
    this.pref_position = '';
    this.game1_status = 'Undecided';
    this.game2_status = 'Undecided';
    this.game3_status = 'Undecided';
  }
}
