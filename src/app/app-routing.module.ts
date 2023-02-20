import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImdbRestComponent } from './imdb-rest/imdb-rest.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component'

const routes: Routes = [
  {path: '', component: ImdbRestComponent},
  {path: ':id', component: MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
