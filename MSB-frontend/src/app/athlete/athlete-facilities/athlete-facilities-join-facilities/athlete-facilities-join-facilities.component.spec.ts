import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteFacilitiesJoinFacilitiesComponent } from './athlete-facilities-join-facilities.component';

describe('AthleteFacilitiesJoinFacilitiesComponent', () => {
  let component: AthleteFacilitiesJoinFacilitiesComponent;
  let fixture: ComponentFixture<AthleteFacilitiesJoinFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteFacilitiesJoinFacilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteFacilitiesJoinFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
