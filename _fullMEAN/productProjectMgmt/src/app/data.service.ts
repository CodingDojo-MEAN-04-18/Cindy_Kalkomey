import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

// import Angular blueprint for a product item -- Product
import { Product } from './product_item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  product: Product;
  // products: Product[] = [];
  products = new BehaviorSubject([]);

// this must agree with what is included in server.js for routes -- // products here is the server-side page routing for all pages
// beginning with /products
  private base = '/api/products';

  constructor( private _http: HttpClient ) { }

  getProducts() {
    console.log('SERVICE in DataService getProducts');
    return this._http.get(this.base);
  }

  createProduct(product: Product) {
    console.log('SERVICE in DataService createProduct to add product: ', product);
    return this._http.post(this.base, product);
  }

  updateProduct(_id: string, product: Product) {
    console.log('SERVICE in DataService updateProduct to change product _id: ', _id, 'to be product:', product);

    console.log('SERVICE in DataService updateProduct is calling .put route $(this.base)/$(_id): ', `${this.base}/${_id}` );
    return this._http.put( `${this.base}/${_id}`,  product);
  }

  deleteProduct(_id: string): Observable<Product> {
    console.log('SERVICE in DataService deleteProduct to delete _id:', _id);
    console.log('SERVICE in DataService deleteProduct is calling .delete route $(this.base)/$(_id): ', `${this.base}/${_id}` );

    return this._http.delete<Product>( `${this.base}/${_id}` );
  }

  getProduct(_id: string): Observable<Product> {
    console.log('SERVICE in DataService getProduct (single) to get _id:', _id);
    console.log('SERVICE in DataService getProduct is calling .get route $(this.base)/$(_id): ', `${this.base}/${_id}` );
    return this._http.get<Product>( `${this.base}/${_id}` );
  }

}
