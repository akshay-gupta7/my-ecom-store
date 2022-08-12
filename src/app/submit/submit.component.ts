import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  name: string = '';
  amount: number = 0;

  constructor(private cartService: CartService, private _Activatedroute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this._Activatedroute.queryParams.subscribe(params =>{
      this.name = params['name'];
      this.amount = params['amount']
    });
  }

  refreshcartonclick(): void{
    this.cartService.emptycart();
  }
}
