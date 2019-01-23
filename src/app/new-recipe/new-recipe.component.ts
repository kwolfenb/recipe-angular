import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  constructor() { }

  @Output() newRecipeSender = new EventEmitter();

  createButtonClicked()
  {
    this.newRecipeSender.emit();
  }

  ngOnInit() {
  }

}
