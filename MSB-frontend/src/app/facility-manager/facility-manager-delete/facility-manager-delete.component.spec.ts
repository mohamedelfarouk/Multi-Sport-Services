import { ComponentFixture, TestBed } from '@angular/core/testing';

 import{FacilityManagerDeleteComponent} from '../facility-manager-delete/facility-manager-delete.component';
describe('trainerDeleteComponent', () => {
  let component: FacilityManagerDeleteComponent;
  let fixture: ComponentFixture<FacilityManagerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityManagerDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityManagerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
