import { Injectable } from '@angular/core';
import { ProductClass } from '../models/product-class.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartitems: ProductClass[] = [];

  constructor() { }

  getitems(): ProductClass[]{
    return this.cartitems;
  }

  gettotalamount(): number{
    let bill = 0;
    for(let i=0;i<this.cartitems.length; i++){
      bill = bill + (this.cartitems[i].price*this.cartitems[i].count);
    }
    return bill;
  }

  addtocart(product: ProductClass): ProductClass[]{
    let flag = false;
    for(let j = 0;j<this.cartitems.length; j++){
      if(this.cartitems[j].id == product.id){
        this.cartitems[j].count = product.count;
        flag = true;
      }
    }
    if(flag == true){
      if(product.count == 0){
        this.cartitems = this.cartitems.filter(x => x.id != product.id);
      }
    }
    if(flag == false){
      this.cartitems.push(product);
      //window.alert(`${product.name} added to Cart`);
    }
    return this.cartitems;
  }

  emptycart(): ProductClass[]{
    this.cartitems = [];
    alert('Cart is now cleared');
    return this.cartitems;
  }
}
