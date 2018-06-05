import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  note: Note;

  // this must agree with what is included in server.js for routes
  // notes here is the server-side routing beginning with /notes
  private base = 'http://localhost:8000/api/notes';

  constructor( private _http: HttpClient ) { }

  // tried to follow Jason's book example
  // getNotes(): Observable<Note> {
  //   return this.http.get<Note[]>(this.base);
  // }
  // but got errors -- WHY?
  getNotes()  {
    console.log('SERVICE in NotesService getNotes');
    return this._http.get(this.base);
  }

// tried to follow Jason's example
//   createBook(note: Note): Observable<Note> {
//     return this.http.post<Note>(this.base, note);
// }
// but got errors -- WHY?
  createNote(note: Note) {
    console.log('SERVICE in NotesService createNote to add note: ', note);
    return this._http.post(this.base, note);
  }

}
