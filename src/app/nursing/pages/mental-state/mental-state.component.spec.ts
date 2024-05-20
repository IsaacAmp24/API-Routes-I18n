import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStateComponent } from './mental-state.component';

describe('MentalStateComponent', () => {
  let component: MentalStateComponent;
  let fixture: ComponentFixture<MentalStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentalStateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentalStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
