import { Injectable } from '@angular/core';
import { ProductClass } from '../models/product-class.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productlist: ProductClass[]= [];

  constructor() { }

  getProducts2(){
    return this.productlist;
  }
}