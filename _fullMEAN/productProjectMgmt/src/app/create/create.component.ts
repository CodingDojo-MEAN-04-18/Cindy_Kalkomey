import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from '../product_item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Product = new Product();

  constructor( private _dataservice: DataService, private _router: Router ) { }

  ngOnInit() {
    }

  onSubmit(event: Event) {

    event.preventDefault();
    console.log('in create component onSubmit with new product: ', this.product);

    // on submit of form, call _dataservice.createProduct to add new product to db
    this._dataservice.createProduct(this.product).subscribe();

    // reset the product for next createProduct
    this.product = new Product();

    // redirect to product listing route
    this._router.navigateByUrl('/products');
  }
}



