import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { SubmitComponent } from './submit/submit.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { FormatWidth } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductPageComponent,
    CartComponent,
    SubmitComponent,
    ProductListItemComponent,
    CartProductComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
