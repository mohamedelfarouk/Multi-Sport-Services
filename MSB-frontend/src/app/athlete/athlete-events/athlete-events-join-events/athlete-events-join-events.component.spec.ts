import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteEventsJoinEventsComponent } from './athlete-events-join-events.component';

describe('AthleteEventsJoinEventsComponent', () => {
  let component: AthleteEventsJoinEventsComponent;
  let fixture: ComponentFixture<AthleteEventsJoinEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteEventsJoinEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteEventsJoinEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
