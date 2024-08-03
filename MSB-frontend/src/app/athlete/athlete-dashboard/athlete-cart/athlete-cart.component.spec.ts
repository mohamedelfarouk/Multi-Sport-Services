import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteCartComponent } from './athlete-cart.component';

describe('AthleteCartComponent', () => {
  let component: AthleteCartComponent;
  let fixture: ComponentFixture<AthleteCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
