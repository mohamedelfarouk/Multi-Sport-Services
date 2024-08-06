import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteEditProfileComponent } from './athlete-edit-profile.component';

describe('AthleteEditProfileComponent', () => {
  let component: AthleteEditProfileComponent;
  let fixture: ComponentFixture<AthleteEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteEditProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
