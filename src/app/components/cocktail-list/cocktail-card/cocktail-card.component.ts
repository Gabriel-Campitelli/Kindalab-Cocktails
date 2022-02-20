import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink-model';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.css'],
})
export class CocktailCardComponent implements OnInit {
  @Input() drink: Drink;

  constructor() {}

  ngOnInit(): void {}
}
