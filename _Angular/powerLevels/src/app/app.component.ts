import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Power } from './power';
import { ChildPower } from './childpow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Power Component';
  power: Power = new Power();
  powercomps: ChildPower[] = [
    {
      _id: 1,
      title: 'HumanComponent',
      multiplier: 1,
      message: '',
      currpower: 0
    },
    {
      _id: 2,
      title: 'SaiyanComponent',
      multiplier: 10,
      message: '',
      currpower: 0
    },
    {
      _id: 3,
      title: 'SuperSaiyanComponent',
      multiplier: 90,
      message: '',
      currpower: 0
    },
    {
      _id: 4,
      title: 'SuperSaiyanTwoComponent',
      multiplier: 160,
      message: '',
      currpower: 0
    },
    {
      _id: 4,
      title: 'SuperSaiyanThreeComponent',
      multiplier: 250,
      message: '',
      currpower: 0
    },
    {
      _id: 6,
      title: 'SuperSaiyanFourComponent',
      multiplier: 500,
      message: '',
      currpower: 0
    },
  ];

  onSubmit(event: Event, formData: NgForm) {
    event.preventDefault();
    console.log('onSubmit form:', formData);
    console.log('onSubmit power:', this.power);
    this.calculatePowers(this.power.level);
    formData.reset();
  }

// helper function to create array of values for power level
    powerOptions(min, max) {
      const nums: number[] = [];
      for (let i = min; i <= max; i++) {
        nums.push(i);
      }
      return nums;
    }

    // trying this as an alternate way to multiply powers so they won't display until formis submitted
    calculatePowers(pow) {
      const p = parseInt(pow, 10);
      console.log('calculatePowers pow = ', p);
      for (const item of this.powercomps) {
        item.currpower = item.multiplier * p;
        console.log('item:', item);
      }
    }
}
