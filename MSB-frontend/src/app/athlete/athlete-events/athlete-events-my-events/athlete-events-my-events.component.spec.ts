import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteEventsMyEventsComponent } from './athlete-events-my-events.component';

describe('AthleteEventsMyEventsComponent', () => {
  let component: AthleteEventsMyEventsComponent;
  let fixture: ComponentFixture<AthleteEventsMyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteEventsMyEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteEventsMyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
