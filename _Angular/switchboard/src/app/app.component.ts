import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Switchboard';
  state: Array<boolean> = [false, false, false, false, false, false, false, false, false, false];

  constructor() {
    console.log('initialized state: ', this.state);
    }

  onClick(idx) { 
    console.log(`Click event is working for div ${ idx } and its state is ${ this.state[idx] }`);

    // change the state (on or off) of the idx element of the array of divs
    if (this.state[idx]) {
      this.state[idx] = false;
    } 
    else {
        this.state[idx] = true;
    }
    console.log('current state array: ', this.state);
  }

  //helper function to output buttom text based on state
  buttonText(state) {
    let text: string = 'OFF';

    if (state) {
      text = 'ON';
    } 

    return text;
  }
 
}
