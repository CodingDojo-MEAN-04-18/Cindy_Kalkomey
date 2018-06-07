import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../product_item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  product: Product = null;
  _id_of_product: string;

  constructor(private _dataservice: DataService, private _route: ActivatedRoute, private _router: Router ) { }

  ngOnInit() {
     // call on DataService getProduct(_id: string) to return Observable of type Product with that id to be editied
     this._route.paramMap.subscribe( params => {
        this._id_of_product = params.get('id');
        console.log('this._id_of_product:', this._id_of_product);

        this._dataservice.getProduct(this._id_of_product)
        .subscribe( productReturned => {
          this.product = productReturned;
          console.log('EDIT COMPONENT ngOnInit retreived item this.product: ', this.product);
        });
      });
    }

  onUpdate(event: Event) {

      event.preventDefault();

      console.log('in edit component onUpdate with changed product with _id: ', this._id_of_product, 'for product:', this.product);

      // on submit of form, call _dataservice.updateProduct to update product in db
      this._dataservice.updateProduct(this._id_of_product, this.product).subscribe();

      // reset the product for next editProduct
      this.product = new Product();

      // redirect to product listing route
      this._router.navigateByUrl('/products');
    }
  }
