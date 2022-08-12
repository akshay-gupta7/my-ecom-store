import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product-detail', component: ProductPageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'final-submit', component: SubmitComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
