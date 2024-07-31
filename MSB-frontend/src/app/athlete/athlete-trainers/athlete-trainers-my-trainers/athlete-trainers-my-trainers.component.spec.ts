import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteTrainersMyTrainersComponent } from './athlete-trainers-my-trainers.component';

describe('AthleteTrainersMyTrainersComponent', () => {
  let component: AthleteTrainersMyTrainersComponent;
  let fixture: ComponentFixture<AthleteTrainersMyTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteTrainersMyTrainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteTrainersMyTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
