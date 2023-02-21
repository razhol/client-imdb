import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbTableComponent } from './imdb-table.component';

describe('ImdbTableComponent', () => {
  let component: ImdbTableComponent;
  let fixture: ComponentFixture<ImdbTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImdbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
