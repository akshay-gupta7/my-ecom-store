import { Component, OnInit } from '@angular/core';
import { ProductClass } from '../models/product-class.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  cartitems: ProductClass[] = [];
  amount: number = 0;
  cardnum: number = 0;
  name: string = '';
  address: string = '';
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartitems = this.cartService.getitems();
    this.amount = this.cartService.gettotalamount();
  }

  clearCart(): void{
    this.cartService.emptycart();
    this.cartitems = [];
    this.amount = this.cartService.gettotalamount();
  }
}
