import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteFacilitiesComponent } from './athlete-facilities.component';

describe('AthleteFacilitiesComponent', () => {
  let component: AthleteFacilitiesComponent;
  let fixture: ComponentFixture<AthleteFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteFacilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
