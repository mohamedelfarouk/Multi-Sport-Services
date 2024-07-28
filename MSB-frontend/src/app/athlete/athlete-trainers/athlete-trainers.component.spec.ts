import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteTrainersComponent } from './athlete-trainers.component';

describe('AthleteTrainersComponent', () => {
  let component: AthleteTrainersComponent;
  let fixture: ComponentFixture<AthleteTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteTrainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
