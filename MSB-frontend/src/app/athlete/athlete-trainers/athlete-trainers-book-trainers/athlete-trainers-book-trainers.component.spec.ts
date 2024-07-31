import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteTrainersBookTrainersComponent } from './athlete-trainers-book-trainers.component';

describe('AthleteTrainersBookTrainersComponent', () => {
  let component: AthleteTrainersBookTrainersComponent;
  let fixture: ComponentFixture<AthleteTrainersBookTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteTrainersBookTrainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteTrainersBookTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
