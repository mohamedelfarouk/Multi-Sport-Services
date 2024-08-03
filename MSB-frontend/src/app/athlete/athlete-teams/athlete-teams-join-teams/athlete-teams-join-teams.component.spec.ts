import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteTeamsJoinTeamsComponent } from './athlete-teams-join-teams.component';

describe('AthleteTeamsJoinTeamsComponent', () => {
  let component: AthleteTeamsJoinTeamsComponent;
  let fixture: ComponentFixture<AthleteTeamsJoinTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteTeamsJoinTeamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteTeamsJoinTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
