import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers: number[] = [];
  numbers2: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {

    this.numbers = this._dataService.retrieveNumbers();
    this.numbers2 = this._dataService.numbers2;

  }
  pushFive() {
    this._dataService.addNumber(5);
  }

  genSeq(num: number) {
    console.log('beta genSeq with num = ', num);
    this._dataService.generateSeq2(num);
  }

}
