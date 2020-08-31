import {Recipe} from './recipes.model'
import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Subject } from 'rxjs'

@Injectable()
export class RecipeService{
    // recipeSelected = new EventEmitter<Recipe>()
    recipesChanged =new Subject<Recipe[]>()

    constructor(private slService:ShoppingListService){}

    private recipes =[
        new Recipe('A T Recipe', 'This is  a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[ 
            new Ingredient('Meat',1),
            new Ingredient('Fries',1)
        ]),
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
            new Ingredient('Meat',2),
            new Ingredient('Fries',2)
        ])
      ]

      getRecipes(){
          return this.recipes.slice()
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients)
      }

      getRecipe(id){
          return this.recipes.slice()[id]
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
    
      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
    
      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}