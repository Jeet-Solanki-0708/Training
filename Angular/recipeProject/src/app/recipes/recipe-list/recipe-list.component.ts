import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipes.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes
  // recipes =[
  //   new Recipe('A T Recipe', 'This is  a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  //   new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  // ]


  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes()
  }

  // onRecipeSelected(recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

}
