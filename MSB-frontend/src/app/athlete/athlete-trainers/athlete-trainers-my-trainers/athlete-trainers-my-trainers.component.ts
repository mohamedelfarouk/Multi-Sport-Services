import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { Trainer } from '../model';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';
@Component({
  selector: 'app-athlete-trainers-my-trainers',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule,MatButtonModule,MatIconModule,MatGridListModule,CommonModule],
  templateUrl: './athlete-trainers-my-trainers.component.html',
  styleUrl: './athlete-trainers-my-trainers.component.css'
})
export class AthleteTrainersMyTrainersComponent implements OnInit {
  myTrainers: Trainer[] = [];
  allTrainers: Trainer[] = [];

  constructor(private trainerService: TrainerService, private router: Router) { }

  ngOnInit(): void {
    this.trainerService.myTrainers$.subscribe(myTrainers => this.myTrainers = myTrainers);
    this.trainerService.trainers$.subscribe(trainers => this.allTrainers = trainers);
  }

  removeTrainer(trainer: Trainer): void {
    // Remove the trainer from myTrainers
    this.myTrainers = this.myTrainers.filter(t => t.userId !== trainer.userId);
    this.allTrainers.push(trainer);

    // Update My Trainers in the service
    this.trainerService.updateMyTrainers(this.myTrainers);

    // Add the trainer back to allTrainers
    const updatedTrainers = [...this.allTrainers, trainer];
    this.trainerService.updateTrainers(updatedTrainers);
  }
}