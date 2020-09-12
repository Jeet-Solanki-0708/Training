import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {ShoppingListService} from './shopping-list/shopping-list-service';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { CartService } from './service/cartService';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ProductDetailComponent,
    CartDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
