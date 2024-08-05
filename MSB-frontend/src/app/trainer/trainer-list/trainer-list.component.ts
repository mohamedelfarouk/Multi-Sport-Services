import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { TrainingSessionService } from '../trainer-sessions.service';
import { TrainingSession } from '../trainer-create-update/trainer-create-update';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-trainer-List-update',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent {
  sessionForm: FormGroup;
  trainingSession: TrainingSession | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private trainerListService: TrainingSessionService) {
    this.sessionForm = this.fb.group({
      sessionId: ['']
    });
  }

  ngOnInit(): void {}

  fetchSession(): void {
    const id = this.sessionForm.get('sessionId')?.value;
    if (id) {
      this.trainerListService.getTrainingSessionById(id).subscribe(
        (session) => {
          this.trainingSession = session;
          this.errorMessage = null;
        },
        (error) => {
          this.errorMessage = 'Error fetching training session';
          this.trainingSession = null;
          console.error('Error:', error);
        }
      );
    } else {
      this.errorMessage = 'Please enter a valid session ID';
    }
  }}
