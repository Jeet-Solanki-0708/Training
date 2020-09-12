import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list-service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  products
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.products=this.shoppingListService.getList();
    console.log("This"+this.products+" "+this.shoppingListService.getList())
    console.log(JSON.stringify(this.shoppingListService.getList()))
  }

}
