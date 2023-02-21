import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImdbMovieSearchComponent } from './imdb-movie-search/imdb-movie-search.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component'

const routes: Routes = [
  {path: '', component: ImdbMovieSearchComponent},
  {path: ':id', component: MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
