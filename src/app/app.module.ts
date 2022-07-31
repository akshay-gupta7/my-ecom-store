import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { SubmitComponent } from './submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductPageComponent,
    CartComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
