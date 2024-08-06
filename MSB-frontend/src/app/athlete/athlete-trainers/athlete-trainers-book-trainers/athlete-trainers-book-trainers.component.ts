import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { Trainer } from '../model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';
@Component({
  selector: 'app-athlete-trainers-book-trainers',
  standalone: true,
  imports: [ MatCardModule, MatChipsModule, MatProgressBarModule,MatButtonModule,MatIconModule,MatGridListModule,CommonModule],
  templateUrl: './athlete-trainers-book-trainers.component.html',
  styleUrl: './athlete-trainers-book-trainers.component.css'
})
export class AthleteTrainersBookTrainersComponent implements OnInit {
  trainers: Trainer[] = []; // List of trainers
  myTrainers: Trainer[] = []; // List of selected trainers

  constructor(private http: HttpClient, private router: Router, private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.loadTrainers();
  }

  addTrainerToMyTrainers(trainer: Trainer): void {
    // Remove the trainer from availableTrainers
    this.trainers = this.trainers.filter(t => t.userId !== trainer.userId);
    
    // Add the trainer to myTrainers
    this.myTrainers.push(trainer);
    this.trainerService.updateTrainers(this.trainers);
    this.trainerService.updateMyTrainers(this.myTrainers);
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/athlete']);
    });
  }

  loadTrainers(): void {
    this.http.get<Trainer[]>('http://localhost:8080/api/trainers') // Adjust the URL as needed
      .subscribe(
        data => {
          this.trainers = data; // Populate the trainers list
          this.trainerService.updateTrainers(this.trainers);
        },
        error => {
          console.error('Error fetching trainers', error);
        }
      );
  }


}
