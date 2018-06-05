import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../../note';
import { NotesService } from '../../notes-service.service';

@Component({
  selector: 'app-one-note',
  templateUrl: './one-note.component.html',
  styleUrls: ['./one-note.component.css']
})
export class OneNoteComponent {
  // explicitly tell OneNoteComponent that note will be passed in as an input (from noteslist.component.hmtl)
  @Input() note: Note;

  constructor( private _noteservice: NotesService, private _router: Router) { }

  // don't need the OnInit lifecycle hook for this component
  //  this component is used only to specify template for display of a single note
  // ngOnInit() { }

}
