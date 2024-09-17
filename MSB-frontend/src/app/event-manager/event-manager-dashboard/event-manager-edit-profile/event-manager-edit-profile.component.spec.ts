import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagerEditProfileComponent } from './event-manager-edit-profile.component';

describe('EventManagerEditProfileComponent', () => {
  let component: EventManagerEditProfileComponent;
  let fixture: ComponentFixture<EventManagerEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventManagerEditProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventManagerEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
