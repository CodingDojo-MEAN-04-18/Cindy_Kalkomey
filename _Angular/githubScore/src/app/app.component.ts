import { Component } from '@angular/core';
import { ScoreService } from './score.service';

import { User } from './ghuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Github Score';
  user: User;
  temp: Object = {};
  score = 0;
  userFound = false;
  message = '';
  searchField: string;

  constructor(private _github: ScoreService) {
  }

  onSubmit(event, formData) {

    console.log('AppComponent > onSubmit');
    this.searchField = formData.username;
    this._github.search(this.searchField)
    .subscribe(
      // handle success
      (response) => {
        console.log('Success! ', response);
        this.userFound = true;
        this.message = '';

        // assign new user properties
        this.user = new User(
          response['id'],
          response['followers'],
          response['name'],
          response['public_repos'],
          response['url']);
        console.log('new user: ', this.user );

        // calculate score
        this.score = this.user.public_repos + this.user.followers;
        console.log('this.score: ', this.score);

        // reset search form
        formData.reset();
        this.userFound = true;
      },
      // handle failure
      (error) => {
        console.log('Error! ', error.json().message);
        this.message = `User ${ this.searchField } does not exist. Choose a different GitHub user.`;
        formData.reset();
        this.userFound = false;
      }
    );
  }
}

