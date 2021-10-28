import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'A test very good, uhrruh',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      [new Ingredient('Meat',1), new Ingredient('Meat',1)]),
    new Recipe(
      'A test recipe 2',
      'A test very good, uhrruh',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      [new Ingredient('Meat',1), new Ingredient('Meat',2)]
      ),
    new Recipe(
      'A test recipe 3',
      'A test very good, uhrruh',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      [new Ingredient('Meat',1), new Ingredient('Meat',3)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
