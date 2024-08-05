import { Component, NgModule } from '@angular/core';
import { TrainingSessionService} from '../trainer-sessions.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-trainer-delete',
  templateUrl: './trainer-delete.component.html',
  styleUrls: ['./trainer-delete.component.css'],
  imports: [CommonModule]
})
export class TrainerDeleteComponent {
  sessionId: number | null = null;
  message: string | null = null;

  constructor(private trainerListService: TrainingSessionService) {}

  deleteSession(): void {
    // Access input element directly
    const inputElement = document.getElementById('sessionId') as HTMLInputElement;
    this.sessionId = Number(inputElement.value);

    if (this.sessionId) {
      this.trainerListService.deleteTrainingSession(this.sessionId).subscribe(
        () => {
          this.message = 'Training session deleted successfully.';
        },
        (error) => {
          this.message = 'Error deleting training session.';
          console.error('Error:', error);
        }
      );
    } else {
      this.message = 'Please enter a valid session ID';
    }
  }
}
