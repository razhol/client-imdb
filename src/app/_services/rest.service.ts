import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../_models/movie';
import {catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
   baseUrl: string = 'https://localhost:7245/';

  constructor(private http: HttpClient) {}

  SearchDataByMovieName(MovieName:string,page:number) {
    return this.http.get<Movie[]>(this.baseUrl + `Movies?searchStr=${MovieName}&pageNumber=${page}`).pipe(
       catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
        } else {
            errorMsg = this.getServerErrorMessage(error);
        }
        alert(errorMsg);
        return throwError(errorMsg);
    })
    );
  }
  SearchDataById(id:string | null) {  
    return this.http.get<Movie[]>(this.baseUrl + `Movies/getById?Id=${id}`).pipe(
      catchError(error => {
        let errorMsg: string;
        debugger;
        if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
        } else {
            errorMsg = this.getServerErrorMessage(error);
        }
        alert(errorMsg);
        return throwError(errorMsg);
    }));
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    debugger;
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
}
}
