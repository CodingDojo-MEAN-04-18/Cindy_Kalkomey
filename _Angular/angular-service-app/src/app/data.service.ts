import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  numbers: number[ ] = [ 1, 2, 3];
  numbers1: number[] = [];
  numbers2: number[] = [];
  difference: number = 0;

  constructor() { }

  retrieveNumbers(): number[] {
    return this.numbers;
  }

  generateSeq1(len: number): void  {
    console.log('generateSeq1 w/ len=', len);
    for (let i = 0; i < len; i++) {
      this.numbers1[i] = Math.floor(Math.random() * 100);
    }
    console.log('this.numbers1= ', this.numbers1);

  }

  generateSeq2(len: number): void {
    console.log('generateSeq2 w/ len=', len);
    for (let i = 0; i < len; i++) {
      this.numbers2[i] = Math.floor(Math.random() * 1000);
    }
    console.log('this.numbers2= ', this.numbers2);

  }

  calculateDifference() {
    console.log('in calculate.Difference');
    let sum1: number = 0;
    let sum2: number = 0;

    for (let i = 0; i < this.numbers1.length; i++) {
      sum1 += this.numbers1[i];
    }

    for (let i = 0; i < this.numbers2.length; i++) {
      sum2 += this.numbers2[i];
    }

    this.difference = sum1 - sum2;
    console.log('sum1=', sum1, 'sum2=', sum2, 'difference=', this.difference);
  }

  addNumber(num: number) {
    this.numbers.push(num);
  }

}
