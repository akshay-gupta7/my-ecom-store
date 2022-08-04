import { Component, OnInit, Input } from '@angular/core';
import { ProductClass } from '../models/product-class.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: ProductClass;

  constructor() {
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
