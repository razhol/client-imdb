import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ImdbRestComponent } from './imdb-rest/imdb-rest.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ImdbRestComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
