import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// import Angular blueprint for a product item -- Product
import { Product } from '../../product_item';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {

  // explicitly tell ItemComponent that product will be passed in as an input (from list.component.hmtl)
  @Input() product: Product;

  // don't need constructor for this component since it's just passing the input product item to the its html file

  constructor(private _dataservice: DataService, private _router: Router) { }

  // ngOnInit() {
 // }

  editItem(id) {

    console.log('in item component editItem with product._id: ', id);

    // redirect to product listing route
    console.log('ITEM COMPONENT calling Angular route:', `/products/edit/${id}`);
    this._router.navigateByUrl(`/products/edit/${id}`);

    }

  deleteItem(id) {

    console.log('in item component deleteItem with product._id: ', id);

    // on click of delete button  call _dataservice to delete product with product.id from db
    this._dataservice.deleteProduct(id).subscribe();
    this.product.active = false;


  }
}
