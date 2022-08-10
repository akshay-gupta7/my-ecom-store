import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpService } from '../services/http.service';
import { ProductClass } from '../models/product-class.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: ProductClass[] = [];
  myproduct: ProductClass[] = [];
  id: string = '0';
  
  constructor(private ProductService: ProductService, private HttpService: HttpService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.HttpService.getProducts().subscribe(data =>{
      this.products = data;
      this._Activatedroute.queryParams.subscribe(params=>{
        this.id = params['id'];
      });
      const test:number = +this.id;
      console.log(test);
      this.products = this.products.filter(x => {return x.id == test});
      this.myproduct[0] = this.products[0];
    })
    

  }

}