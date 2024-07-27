import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteTeamsComponent } from './athlete-teams.component';

describe('AthleteTeamsComponent', () => {
  let component: AthleteTeamsComponent;
  let fixture: ComponentFixture<AthleteTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteTeamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
