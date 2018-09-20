import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesServices } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesServices]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipesServices) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(     //subscribe(type of data) => ES 6 error function {function body}
      (recipe: Recipe) => {
        this.selectedRecipe = recipe
      }
    )
  }

}
