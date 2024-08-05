import { ComponentFixture, TestBed } from '@angular/core/testing';

import { trainerCreateUpdateComponent } from './trainer-create-update.component';

describe('trainerCreateUpdateComponent', () => {
  let component:   trainerCreateUpdateComponent;
  let fixture: ComponentFixture<trainerCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [trainerCreateUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(trainerCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
