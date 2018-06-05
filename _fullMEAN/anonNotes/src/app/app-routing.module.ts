import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { OneNoteComponent } from './noteslist/one-note/one-note.component';

const routes: Routes = [
  { path: '', redirectTo: 'noteslist', pathMatch: 'full' },
  { path: 'notes', component: NoteslistComponent , pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
