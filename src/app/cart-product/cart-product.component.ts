import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductClass } from '../models/product-class.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  @Input() product: ProductClass;
  @Output() removefromcart = new EventEmitter();
  
  
  constructor(private cartService: CartService) { 
    this.product ={
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      count: 0
    }
  }

  ngOnInit(): void {
    
  }
  
  

}
