import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbRestComponent } from './imdb-rest.component';

describe('ImdbRestComponent', () => {
  let component: ImdbRestComponent;
  let fixture: ComponentFixture<ImdbRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbRestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImdbRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
