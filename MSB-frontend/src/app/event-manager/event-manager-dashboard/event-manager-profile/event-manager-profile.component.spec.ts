import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagerProfileComponent } from './event-manager-profile.component';

describe('EventManagerProfileComponent', () => {
  let component: EventManagerProfileComponent;
  let fixture: ComponentFixture<EventManagerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventManagerProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
