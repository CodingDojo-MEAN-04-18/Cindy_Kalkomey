import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NotesService } from './notes-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anonymous Notes';

  // do I even need a constructor here? If yes, do I need to inject anything?
  // No - tested without it and don't need a constructor here.
//  constructor( private _route: ActivatedRoute, private _noteservice: NotesService) { }

}
