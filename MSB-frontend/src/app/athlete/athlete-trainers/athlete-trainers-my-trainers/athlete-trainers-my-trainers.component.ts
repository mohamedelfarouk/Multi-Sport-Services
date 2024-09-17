import { Component, Input, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
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
  myTrainers: any[] = [];
  allTrainers: any[] = [];
  @Input() userData:any;
  userTrainers:any;
  constructor(private trainerService: TrainerService, private router: Router) { }

  ngOnInit(): void {
    this.trainerService.myTrainers$.subscribe(myTrainers => this.myTrainers = myTrainers);
    this.trainerService.trainers$.subscribe(trainers => this.allTrainers = trainers);
    this.myTrainers=this.trainerService.getAthleteTrainers(this.userData.userId);
    this.trainerService.updateMyTrainers(this.myTrainers);

  }

  removeTrainer(trainer: any): void {
    this.trainerService.myTrainers$.subscribe(myTrainers => this.myTrainers = myTrainers);
    this.trainerService.trainers$.subscribe(trainers => this.allTrainers = trainers);
    // Remove the trainer from myTrainers
    this.myTrainers = this.myTrainers.filter((f: { trainerId: any; }) => f.trainerId !== trainer.trainerId);
this.allTrainers.push(trainer);
    // Update My Trainers in the service
    this.trainerService.updateMyTrainers(this.myTrainers);
    this.trainerService.updateAthleteTrainers(this.userData.userId,this.myTrainers);

    this.trainerService.updateTrainers(this.allTrainers);
    console.log("remove: ",this.myTrainers);
    this.trainerService.myTrainers$.subscribe(myTrainers => this.myTrainers = myTrainers);
    this.trainerService.trainers$.subscribe(trainers => this.allTrainers = trainers);
    console.log("remove after subscribe: ",this.myTrainers);

  }
}