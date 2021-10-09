import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ing: Ingredient){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    console.log("Ing Name = " + ingName);
    console.log("Ing Amonut = " + ingAmount);
    ing = new Ingredient(ingName, ingAmount);
    return this.ingredientAdded.emit(ing);
  }


}
