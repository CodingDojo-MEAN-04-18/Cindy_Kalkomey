import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  colors: Array<string>;
 
  // Populate colors
  constructor() {
    this.colors = ['Magenta','Lime', 'Purple', 'Orange', 'Yellow', 'Aqua', 'BlueViolet', 'DarkBlue', 'Gold', 'Red']
  }
 
  // Our component will use this helper function to shuffle the colors
  shuffleColors(arr) {
    let currentIndex: number = arr.length;
    let temporaryValue: string;
    let randomIndex: number;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
  }
}
