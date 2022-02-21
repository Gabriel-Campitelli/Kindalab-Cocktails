import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from 'src/app/models/cocktail-model';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  private baseUrl =
    'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient) { }

  getAllCocktails(): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.baseUrl}filter.php?g=Cocktail_glass`);
  }

  getCocktailDetail(idDrink: number): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.baseUrl}lookup.php?i=${idDrink}`);
  }
}
