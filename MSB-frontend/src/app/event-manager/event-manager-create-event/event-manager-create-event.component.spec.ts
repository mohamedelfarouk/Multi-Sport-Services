import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagerCreateEventComponent } from './event-manager-create-event.component';

describe('EventManagerCreateEventComponent', () => {
  let component: EventManagerCreateEventComponent;
  let fixture: ComponentFixture<EventManagerCreateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventManagerCreateEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagerCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
