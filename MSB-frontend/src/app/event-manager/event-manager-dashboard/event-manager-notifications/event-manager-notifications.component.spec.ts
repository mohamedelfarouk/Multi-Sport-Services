import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagerNotificationsComponent } from './event-manager-notifications.component';

describe('EventManagerNotificationsComponent', () => {
  let component: EventManagerNotificationsComponent;
  let fixture: ComponentFixture<EventManagerNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventManagerNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagerNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
