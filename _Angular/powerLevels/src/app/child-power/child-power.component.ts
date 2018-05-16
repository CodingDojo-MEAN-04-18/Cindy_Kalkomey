import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ChildPower } from '../childpow';
import { Power } from '../power';

@Component({
  selector: 'app-child-power',
  templateUrl: './child-power.component.html',
  styleUrls: ['./child-power.component.css']
})

export class ChildPowerComponent implements OnInit {
  @Input() myPowercomp: ChildPower[];
  @Input() myPower: Power;
  @Input() isSubmitted: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log('myPowercomp: ', this.myPowercomp);
  }

  // helper function to determine message
  setMessage(mypow) {
    let message = '';
    if ( mypow >= 50000 ) {
      message = 'The One';
    } else if ( mypow > 20000 ) {
      message = 'Superlative!';
    } else if ( mypow > 9000 ) {
      message = 'Over 9000!';
    }
    return message;
  }

}
