import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter;

  recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'A test very good, uhrruh', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
    new Recipe('A test recipe 2', 'A test very good, uhrruh', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
    new Recipe('A test recipe 3', 'A test very good, uhrruh', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe){
    return this.recipeWasSelected.emit(recipe);
  }

}
