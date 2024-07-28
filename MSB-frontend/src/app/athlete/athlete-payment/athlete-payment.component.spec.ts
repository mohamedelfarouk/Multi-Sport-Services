import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletePaymentComponent } from './athlete-payment.component';

describe('AthletePaymentComponent', () => {
  let component: AthletePaymentComponent;
  let fixture: ComponentFixture<AthletePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthletePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthletePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
