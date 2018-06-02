let counter = 1;

// Angular blueprint for product items.
// I'm unsure whether it's necessary to name the same as the mongoDB model class (e.g., Product, here).
// I think it's important to name the attributes the same to allow for ease in sending json response directly to database
export class Product {
    productid: number;
    title: string;
    price: number;
    image: string;
    active = true;

    constructor() {
      this.productid = counter;
      counter++;
    }
}
