import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from '../shopping-list/shopping-list-service'
import {CartService} from '../service/cartService'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  constructor(private route:ActivatedRoute,private shoppingListService:ShoppingListService,private cartService:CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      this.product=this.shoppingListService.getListById(+param.get('productId'))
    })
    console.log("In")
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
