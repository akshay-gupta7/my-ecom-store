import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpService } from '../services/http.service';
import { ProductClass } from '../models/product-class.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductClass[] = [];

  constructor(private ProductService: ProductService, private HttpService: HttpService) { }

  ngOnInit(): void {
    this.HttpService.getProducts().subscribe(data =>{
      this.products = data;
    })
  }
}
