import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from 'src/app/models/cocktail-model';
import { Drink } from 'src/app/models/drink-model';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {

  isDefined = isDefined;

  drinkId: number;
  drink: Drink;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cocktailService: CocktailsService
  ) {
    this.route.queryParams.subscribe(params => {
      this.drinkId = params.id;
    });
  }

  ngOnInit(): void {

    this.cocktailService.getCocktailDetail(this.drinkId).subscribe((cocktail: Cocktail) => {
      this.drink = cocktail.drinks[0];
      console.log("drink: ", this.drink)
    });

  }

  inicio() {
    this.router.navigate(['/', 'cocktails']);
  }

}
