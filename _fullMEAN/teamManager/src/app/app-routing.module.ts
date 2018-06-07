import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { AddplayerComponent } from './players/addplayer/addplayer.component';
import { StatusComponent } from './status/status.component';
import { GameComponent } from './status/game/game.component';

const routes: Routes = [
  { path: '', redirectTo: 'players', pathMatch: 'full' },

  { path : 'status', component: StatusComponent, children: [
    { path: '', redirectTo: 'game/1', pathMatch: 'full'},
    { path: 'game/:id', component: GameComponent },
  ]},

  { path: 'players', component: PlayersComponent,   children: [
    { path: '', redirectTo: 'list' , pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'addplayer', component: AddplayerComponent }
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
