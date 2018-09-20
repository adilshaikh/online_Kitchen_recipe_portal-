import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppinglistServices } from "../shopping-list/shopping-list.service";

@Injectable() 

export class RecipesServices {
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[]=[
        new Recipe('Pizza','This is just for testing','https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
        [
           new Ingredient('Meat', 3),
           new Ingredient('Cheese', 5)
        ]),
        new Recipe('Burger','This is Another Recipe for testing','https://sifu.unileversolutions.com/image/en-AU/recipe-topvisual/2/1260-709/beef-burger-with-deep-fried-bacon-and-thousand-island-dressing-50247463.jpg',
    [
        new Ingredient('Cheese', 2),
        new Ingredient('French Fries',5)
    ])
      ];

    constructor(private slService: ShoppinglistServices){

    }
    getRecipe(){
        return this.recipes.slice();
    }
    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
    } //injecting this service from shoppinglist and adding method and passing the value to the method
}