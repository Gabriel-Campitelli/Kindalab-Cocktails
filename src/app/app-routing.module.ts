import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/cocktail-list', pathMatch: 'full' },
  {
    path: 'cocktail-list',
    component: CocktailListComponent,
  },
  {
    path: '**',
    redirectTo: '/cocktail-list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
