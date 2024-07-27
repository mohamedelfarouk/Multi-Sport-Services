import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteBookingsComponent } from './athlete-bookings.component';

describe('AthleteBookingsComponent', () => {
  let component: AthleteBookingsComponent;
  let fixture: ComponentFixture<AthleteBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteBookingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
