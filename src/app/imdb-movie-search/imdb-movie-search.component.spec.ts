import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbMovieSearchComponent } from './imdb-movie-search.component';

describe('ImdbRestComponent', () => {
  let component: ImdbMovieSearchComponent;
  let fixture: ComponentFixture<ImdbMovieSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbMovieSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImdbMovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
