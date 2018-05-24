
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

import { User } from './ghuser';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  apiRoot = 'https://api.github.com/users/';

  constructor( private _http: Http ) {
  }

search(username: string) {
  console.log('in search servie function with username: ', username);
  const apiURL = `${this.apiRoot}${ username }`;
  console.log('ScoreService > search apiURL: ', apiURL);
  return this._http.get(apiURL).pipe(map( response => response.json() ));
  }
}
