import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients

  // ingredients=[
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10),
  // ]
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.slService.getIngredients()
    this.slService.ingredientsChanged.subscribe((ingredients)=>{
        this.ingredients=ingredients
    })
  }

  // onIngredientAdded(ingredient) {
  //   this.ingredients.push(ingredient);
  // }
}
