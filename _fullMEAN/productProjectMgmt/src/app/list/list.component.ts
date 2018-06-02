import {
  Component,
  OnInit,
//  AfterContentChecked,
} from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product_item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allProducts: Product[] = [];

  constructor( private _dataservice: DataService, private _router: Router ) {

  }
  ngOnInit() {
    this.getProducts();
  }

// trying to figure out how to force list.component to refresh its list of components after item.component deletes its data
/*   ngAfterContentChecked() {
    this.getProducts();
  } */

  getProducts() {
    this._dataservice.getProducts()
    .subscribe(
     (response: any) => {
       console.log('list.component.ts call dataservice.getProducts() and got response', response);

       this.allProducts = response;
       console.log('list.component.ts call dataservice.getProducts() allProducts:', this.allProducts);
     },
     (err) => {
       console.log('list.component.ts call dataservice.getProducts() error:', err);
     }
   );
  }

}
