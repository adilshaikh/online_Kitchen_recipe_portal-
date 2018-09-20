import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesServices } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
@Input() recipe: Recipe;

  constructor(private recipeService: RecipesServices) { }

  ngOnInit() {
  }
onAddToShoppingList(){
  this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
}
}
