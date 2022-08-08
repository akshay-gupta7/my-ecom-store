import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductClass } from '../models/product-class.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productlist: ProductClass[]= [];
  product: ProductClass[] = [];

  constructor(private HttpService: HttpService ) { }

  getProducts(): void{
    this.HttpService.getProducts().subscribe(data =>{
      this.productlist = data;
  })
}
}