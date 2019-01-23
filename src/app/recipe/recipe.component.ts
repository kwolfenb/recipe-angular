import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model'


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  // number: number = 0;
  // measurement: string = "";
  // ingredient: string = "";
  // ingredientList = [];

  @Input() recipe: Recipe;

  // recipe = new Recipe('test', this.ingredientList, 'test');
  
  // myrecipe = new Recipe(name, tempIngredientList, "test");
  

  // addIngredient(number, measurement, ingredient) {
  //   let tempIngredientList = [];
  //   tempIngredientList.push(number)
  //   tempIngredientList.push(measurement)
  //   tempIngredientList.push(ingredient)
    
  //   this.ingredientList.push(tempIngredientList);
  //   console.log(this.ingredientList);
  // }

  // newRecipe(name, ingredientList, directions) {
  //   this.recipe = new Recipe(name, ingredientList, directions);
  //   console.log(this.recipe);
  //   return this.recipe;

  // }
  ngOnInit() {
  }

}
