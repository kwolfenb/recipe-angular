import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello World';
  addBtn: string = "Adde New Recipe";

  allRecipes = [
    new Recipe('juice', [1, 'cup', 'juice'], 'drink it'),
    new Recipe('water', [1, 'cup', 'water'], 'drink it fast'),
    new Recipe('beer', [1, 'cup', 'beer'], 'drInK it')
  ]

  newRecipe() {
    this.allRecipes.push(new Recipe("new recipe", [2, "sdfds", "sdfsd"], 'directions'));
  }

}
