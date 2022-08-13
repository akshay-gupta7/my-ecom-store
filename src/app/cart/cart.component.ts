import { Component, OnInit } from '@angular/core';
import { ProductClass } from '../models/product-class.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
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

  onremovefromcart(product: ProductClass): void{
    this.cartitems = this.cartService.removefromcart(product);
    this.amount = this.cartService.gettotalamount();
    window.alert(`${product.name} Removed from cart`);
  }

}
