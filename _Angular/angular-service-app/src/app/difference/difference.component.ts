import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {
  difference: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {

  }

  genDiff() {
    console.log('in difference component');

    this._dataService.calculateDifference();
    // have to assign value since not an array and same by reference
    this.difference = this._dataService.difference;

    console.log('in genDiff difference=', this.difference);

    return this.difference;
  }


}
