import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpService } from '../services/http.service';
import { ProductClass } from '../models/product-class.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: ProductClass[] = [];
  myproduct: ProductClass[] = [];
  id: number = 2;
  constructor(private ProductService: ProductService, private HttpService: HttpService) { }

  ngOnInit(): void {
    this.HttpService.getProducts().subscribe(data =>{
      this.products = data;
      this.products = this.products.filter(x => {return x.id == this.id});
      this.myproduct[0] = this.products[0];
    })
    

  }

}
