import { Component, OnInit } from '@angular/core';
import {CartService} from '../service/cartService'
import { FormsModule,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  products;
  checkoutForm;

  constructor(private cartService:CartService,private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.products=this.cartService.getItems();
  }

  cartLength(){
    return this.products.length>0?true:false;
  }

  onSubmit(customerData) {
    this.products = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
