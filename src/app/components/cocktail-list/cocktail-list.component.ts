import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail-model';
import { Drink } from 'src/app/models/drink-model';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  drinks: Array<Drink> = [];

  constructor(private cocktailService: CocktailsService) {
    this.cocktailService.getAllCocktails().subscribe((cocktail: Cocktail) => {
      console.log('cocktails: ', cocktail);
      this.drinks = cocktail.drinks;
    });
  }

  ngOnInit(): void {}
}
