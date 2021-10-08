import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe = new Recipe('A test recipe 1', 'A test very good, uhrruh', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png');
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
  }
}
