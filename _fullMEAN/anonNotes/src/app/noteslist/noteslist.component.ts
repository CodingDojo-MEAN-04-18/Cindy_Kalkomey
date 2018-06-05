import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Note } from '../note';
import { NotesService } from '../notes-service.service';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css']
})
export class NoteslistComponent implements OnInit {
  note: Note = new Note();
  allNotes: Note[] = [];

  constructor( private _noteservice: NotesService, private _router: Router ) {

  }
  ngOnInit() {
    this.getNotes();
  }

  onSubmit(event: Event, formData: NgForm) {

    event.preventDefault();
    console.log('in noteslist component onSubmit with new note: ', this.note);

    this._noteservice.createNote(this.note).subscribe();

    // reset the note for next createNote
    this.note = new Note();

    // reset formData
    formData.reset();

    // get all notes again to include the newly added note
    this.getNotes();
  }

  getNotes() {
    this._noteservice.getNotes()
    .subscribe(
     (response: any) => {
       console.log('noteslist.component.ts call noteservice.getNotes() and got response', response);

       this.allNotes = response;
       console.log('noteslist.component.ts call noteservice.getNotes() allNotes:', this.allNotes);
     },
     (err) => {
       console.log('noteslist.component.ts call noteservice.getNotes() error:', err);
     }
   );
  }

  // sorting methog (using helper function compareValues), used to sort createdAt date within the html template
  // uses javascript arr.sort([compareFunction]) method for inplace sorting
  sortNotes(notes) {
    console.log('in noteslist component -- sorting notes', notes);
    return notes.sort( this.compareValues('createdAt') );
  }

  // function for dynamic sorting - descending
  // If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
  compareValues(key) {
    return function(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
          return 0;
      }

      const varA = a[key];
      const varB = b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = -1;
      } else if (varA < varB) {
        comparison = 1;
      }

      return (comparison);
    };
  }

}
