import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainingSessionService } from '../trainer-sessions.service';
import { TrainingSession } from './trainer-create-update';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-trainer-create-update',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './trainer-create-update.component.html',
  styleUrls: ['./trainer-create-update.component.css']
})
export class trainerCreateUpdateComponent implements OnInit {
  sessionForm: FormGroup;
  isEditMode = false;
  sessionId: number | null = null;  // Track the session ID for updates

  constructor(
    private fb: FormBuilder,
    private trainerSessionsService: TrainingSessionService
  ) {
    this.sessionForm = this.fb.group({
      cost: [''],
      trainerId: [''],
      athleteId: [''],
      sessionType: [''],
      startTime: [''],
      endTime: [''],
      sessionDate: ['']
    });
  }

  ngOnInit(): void {
     
  }
 

  onSubmit(): void {
    const formValues = this.sessionForm.value;

    const startDateTime = new Date(`${formValues.sessionDate}T${formValues.startTime}:00Z`);
    const endDateTime = new Date(`${formValues.sessionDate}T${formValues.endTime}:00Z`);

    const sessionData: TrainingSession = {
        // Add the sessionId if available
      cost: formValues.cost,
      trainer: {
        userId: formValues.trainerId
      },
      athlete: {
        userId: formValues.athleteId
      },
      sessionType: formValues.sessionType,
      startTime: startDateTime.toISOString(),
      endTime: endDateTime.toISOString(),
      sessionDate: formValues.sessionDate
       
    };
 
      // Create new session
      this.trainerSessionsService.createSession(sessionData).subscribe(
        response => {
          console.log('Session saved successfully:', response);
        },
        error => {
          console.error('Error saving session:', error);
        }
      );
    }
  }

