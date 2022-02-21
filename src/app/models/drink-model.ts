export class Drink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: number;

  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;

  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;

  strInstructions: string;

  constructor(
    strDrink: string,
    strDrinkThumb: string,
    idDrink: number,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strInstructions: string
  ) {
    this.strDrink = strDrink;
    this.strDrinkThumb = strDrinkThumb;
    this.idDrink = idDrink;
    this.strIngredient1 = strIngredient1;
    this.strIngredient2 = strIngredient2;
    this.strIngredient3 = strIngredient3;
    this.strIngredient4 = strIngredient4;
    this.strMeasure1 = strMeasure1;
    this.strMeasure2 = strMeasure2;
    this.strMeasure3 = strMeasure3;
    this.strMeasure4 = strMeasure4;
    this.strInstructions = strInstructions;
  }
}
