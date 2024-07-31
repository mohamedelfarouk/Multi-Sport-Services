import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteTeamsMyTeamsComponent } from './athlete-teams-my-teams.component';

describe('AthleteTeamsMyTeamsComponent', () => {
  let component: AthleteTeamsMyTeamsComponent;
  let fixture: ComponentFixture<AthleteTeamsMyTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteTeamsMyTeamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteTeamsMyTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
