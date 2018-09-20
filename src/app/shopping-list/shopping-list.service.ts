import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';
export class ShoppinglistServices {
    ingredientChanged = new EventEmitter<Ingredient[]>(); //define new event emitter to return Ingredient array
    private ingredients: Ingredient[]= [
        new Ingredient('Apples', 3),
        new Ingredient('Mangoes', 2)
      ];

      getIngredients(){
          return this.ingredients.slice(); //slice() will return the copy of Ingredients array
      }
      onAddIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientChanged.emit(this.ingredients)
      }
      addIngredients(ingredients: Ingredient[]){
    //     for (let ingredient of ingredients) {
    //         this.onAddIngredient(ingredient)
    //   }
        this.ingredients.push(...ingredients) //es 6 spread operator '...'  we can spread the list of single ingredients
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}