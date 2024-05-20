import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMentalComponent } from './card-mental.component';

describe('CardMentalComponent', () => {
  let component: CardMentalComponent;
  let fixture: ComponentFixture<CardMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardMentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
