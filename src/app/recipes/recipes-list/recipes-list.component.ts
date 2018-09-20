import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesServices } from '../recipes.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[]

  constructor(private recipeService: RecipesServices) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }
}
