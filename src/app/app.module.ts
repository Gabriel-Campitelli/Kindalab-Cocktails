import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailCardComponent } from './components/cocktail-list/cocktail-card/cocktail-card.component';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent,
    CocktailDetailComponent,
    CocktailCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
