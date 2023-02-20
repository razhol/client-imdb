import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RestService } from '../_services/rest.service';
import { Movie } from '../_models/movie';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  public id:string | null ="";
  public movie:Movie | undefined;
  constructor(private route: ActivatedRoute,private router:Router,private restService: RestService,private spinner: NgxSpinnerService) {}

 ngOnInit() {    
  this.spinner.hide();
  this.id = this.route.snapshot.paramMap.get('id');
  this.spinner.show();
  this.restService.SearchDataById(this.id).subscribe((result:any) => {
    this.movie = result;
    this.spinner.hide();
  },
  error => {
    this.spinner.hide();
    this.router.navigateByUrl('/');
  })
 }
}
