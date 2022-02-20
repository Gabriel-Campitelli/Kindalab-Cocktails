import { Drink } from 'src/app/models/drink-model';

export class Cocktail {
  drinks: Array<Drink>;

  constructor(drinks: Array<Drink>) {
    this.drinks = drinks;
  }
}
