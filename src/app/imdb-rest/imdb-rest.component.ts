import { Component ,OnInit } from '@angular/core';
import { Movie } from '../_models/movie';
import { RestService } from '../_services/rest.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-imdb-rest',
  templateUrl: './imdb-rest.component.html',
  styleUrls: ['./imdb-rest.component.scss']
})

export class ImdbRestComponent implements OnInit {
  movies: Movie[] = [];
  MovieName: string = "";
  movieNameSuccess:string = "";
  fromPaging:boolean = false;
  NextPage:boolean = true
  page: number = 1;

  constructor(private restService: RestService, private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.MovieName = "Batman"
    if(sessionStorage.hasOwnProperty('Page')) {
      this.page = JSON.parse(sessionStorage['Page']);
    }
    if(sessionStorage.hasOwnProperty('MovieName')) {
      this.MovieName = JSON.parse(sessionStorage['MovieName']);
    }
    this.searchMovie();
  }

  searchByInputField() {
    this.page = 1;
    this.fromPaging = false;
    this.searchMovie();
  }

  saveInSessinStorage(){
    sessionStorage.setItem('MovieName', JSON.stringify(this.movieNameSuccess));
    sessionStorage.setItem('Page', JSON.stringify(this.page));
  }

  searchMovie() {
    this.spinner.show();
    this.restService.SearchDataByMovieName(this.MovieName,this.page).subscribe(
      result => {
        this.movies = result.sort((x:any, y:any)=> parseFloat(y.imdbRating) - parseFloat(x.imdbRating));
        this.movieNameSuccess = this.MovieName;
        this.spinner.hide();
      },
      error => {
        if(this.fromPaging && this.NextPage){
          this.page --;  
        }
        this.MovieName = this.movieNameSuccess;
        this.spinner.hide();
      },
    )
  }

  navigate(id:string) {
    this.router.navigateByUrl(`/${id}` );
  }

  paging(){
    this.NextPage ? this.page ++ : this.page --;
    if(this.page > 0) {
      this.fromPaging = true;
      this.searchMovie();
    }
    else {
      this.page ++;
    }
  }
}