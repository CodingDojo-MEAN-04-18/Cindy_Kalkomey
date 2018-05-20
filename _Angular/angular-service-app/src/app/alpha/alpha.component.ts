import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: number[] = [];
  numbers1: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {

    this.numbers = this._dataService.retrieveNumbers();
    this.numbers1 = this._dataService.numbers1;

  }
  pushOne() {
    this._dataService.addNumber(1);
  }

  genSeq(num: number) {
    console.log('alpha genSeq with num = ', num);
    this._dataService.generateSeq1(num);
  }

}
