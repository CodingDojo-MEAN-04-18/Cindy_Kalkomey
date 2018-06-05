import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { NotesService } from './notes-service.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { OneNoteComponent } from './noteslist/one-note/one-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteslistComponent,
    OneNoteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    NotesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
