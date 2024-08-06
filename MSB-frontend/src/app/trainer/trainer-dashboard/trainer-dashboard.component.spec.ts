import { ComponentFixture, TestBed } from '@angular/core/testing';

import { trainerDashboardComponent } from './trainer-dashboard.component';

describe('trainerDashboardComponent', () => {
  let component: trainerDashboardComponent;
  let fixture: ComponentFixture<trainerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [trainerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(trainerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
