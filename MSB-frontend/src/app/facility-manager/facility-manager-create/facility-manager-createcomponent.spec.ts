import { ComponentFixture, TestBed } from '@angular/core/testing';

import{FacilityManagerCreateComponent} from './facility-manager-update.component'
describe('FacilityManagerCreateComponent', () => {
  let component:   FacilityManagerCreateComponent;
  let fixture: ComponentFixture<FacilityManagerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityManagerCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityManagerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
