import { Component, OnInit, OnDestroy } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy{
  ingredients
  private igChanged:Subscription
  // ingredients=[
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10),
  // ]
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.slService.getIngredients()
    this.igChanged=this.slService.ingredientsChanged.subscribe((ingredients)=>{
        this.ingredients=ingredients
    })
  }

  onEditItem(index:number){
    this.slService.startedEditing.next(index)
  }

  ngOnDestroy(){
    this.igChanged.unsubscribe()
  }
  // onIngredientAdded(ingredient) {
  //   this.ingredients.push(ingredient);
  // }
}
