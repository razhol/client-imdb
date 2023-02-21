import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/_models/movie';

@Component({
  selector: 'imdb-table',
  templateUrl: './imdb-table.component.html',
  styleUrls: ['./imdb-table.component.scss']
})
export class ImdbTableComponent {
  @Input() movies:Movie[] = []
  @Output() saveSessionStorage = new EventEmitter()
  
}
