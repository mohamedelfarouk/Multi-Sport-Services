import { ComponentFixture, TestBed } from '@angular/core/testing';

import{FacilityManagerDashboardComponent} from '../facility-manager-dashboard/facility-manager-dashboard.component'

describe('FacilityManagerDashboardComponent', () => {
  let component: FacilityManagerDashboardComponent;
  let fixture: ComponentFixture<FacilityManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityManagerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
