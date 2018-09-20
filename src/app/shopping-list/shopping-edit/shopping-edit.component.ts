import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistServices } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppinglistServices) { }

  ngOnInit() {
  }
  onAddItem() {
    const newNameInput = this.nameInputRef.nativeElement.value;
    const newAmountInput = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(newNameInput, newAmountInput);
    this.slService.onAddIngredient(newIngredient);
    
  }
}
