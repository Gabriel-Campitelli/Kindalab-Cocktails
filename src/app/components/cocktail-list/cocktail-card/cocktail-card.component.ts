import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drink } from 'src/app/models/drink-model';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.css'],
})
export class CocktailCardComponent {
  @Input() drink: Drink;

  constructor(private router: Router) { }

  mostrarDetalle(drink: Drink) {
    this.router.navigate(['/', 'cocktail', drink.idDrink], { queryParams: { id: drink.idDrink } })
  }
}
