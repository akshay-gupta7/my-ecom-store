import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpService } from '../services/http.service';
import { ProductClass } from '../models/product-class.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductClass[] = [];

  constructor(private ProductService: ProductService, private HttpService: HttpService, private cartService: CartService) { }

  ngOnInit(): void {
    this.HttpService.getProducts().subscribe(data =>{
      this.products = data;
    })
  }
  onaddtoCart(product: ProductClass): void{
    this.cartService.addtocart(product);
    window.alert(`${product.count} ${product.name} are added to cart`);
    //product.count = total;
  }
}
