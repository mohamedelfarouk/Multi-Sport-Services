import { ComponentFixture, TestBed } from '@angular/core/testing';

import {trainerDeleteComponent} from './trainer-delete.component';

describe('trainerDeleteComponent', () => {
  let component: trainerDeleteComponent;
  let fixture: ComponentFixture<trainerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [trainerDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(trainerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
