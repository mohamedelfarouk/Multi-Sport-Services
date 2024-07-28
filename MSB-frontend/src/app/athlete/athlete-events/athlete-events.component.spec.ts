import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteEventsComponent } from './athlete-events.component';

describe('AthleteEventsComponent', () => {
  let component: AthleteEventsComponent;
  let fixture: ComponentFixture<AthleteEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
