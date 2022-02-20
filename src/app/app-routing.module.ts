import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/cocktails', pathMatch: 'full' },
  {
    path: 'cocktails',
    component: CocktailListComponent,
  },
  {
    path: '**',
    redirectTo: '/cocktails',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
