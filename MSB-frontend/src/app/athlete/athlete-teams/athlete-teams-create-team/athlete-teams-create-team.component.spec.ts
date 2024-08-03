import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteTeamsCreateTeamComponent } from './athlete-teams-create-team.component';

describe('AthleteTeamsCreateTeamComponent', () => {
  let component: AthleteTeamsCreateTeamComponent;
  let fixture: ComponentFixture<AthleteTeamsCreateTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteTeamsCreateTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteTeamsCreateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
