import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteFacilitiesMyFacilitiesComponent } from './athlete-facilities-my-facilities.component';

describe('AthleteFacilitiesMyFacilitiesComponent', () => {
  let component: AthleteFacilitiesMyFacilitiesComponent;
  let fixture: ComponentFixture<AthleteFacilitiesMyFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteFacilitiesMyFacilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteFacilitiesMyFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
