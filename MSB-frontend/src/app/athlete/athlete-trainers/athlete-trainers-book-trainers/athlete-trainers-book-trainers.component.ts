import { Component, Input, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-athlete-trainers-book-trainers',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    CommonModule,
    MatFormFieldModule,MatInputModule,FormsModule

  ],
  templateUrl: './athlete-trainers-book-trainers.component.html',
  styleUrl: './athlete-trainers-book-trainers.component.css',
})
export class AthleteTrainersBookTrainersComponent implements OnInit {
  trainers: any[] = []; // List of trainers
  myTrainers: any[] = []; // List of selected trainers
  searchQuery: string = '';
  private apiUrl = 'http://localhost:8080/api/trainers';

  @Input() userData: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private trainerService: TrainerService
  ) {}

  ngOnInit(): void {
    this.loadTrainers();
  }

  searchTrainers(): void {
    const searchUrl = `${this.apiUrl}/search?query=${this.searchQuery}`;
    this.http.get<any[]>(searchUrl).subscribe(data => {
      this.trainers = data;
    }, error => {
      console.error("Error fetching search results", error);
    });
}

addTrainerToMyTrainers(trainer: any): void {
  this.trainerService.myTrainers$.subscribe(myTrainers => this.myTrainers = myTrainers);
  this.trainerService.trainers$.subscribe(trainers => this.trainers = trainers);
  // Remove the trainer from availableTrainers
  this.trainers = this.trainers.filter(
    (f: { trainerId: any; }) => f.trainerId !== trainer.trainerId
  );

  // Add the trainer to myTrainers
  this.myTrainers.push(trainer);
  this.trainerService.updateTrainers(this.trainers);
  this.trainerService.updateMyTrainers(this.myTrainers);
  this.trainerService.updateAthleteTrainers(this.userData.userId,this.myTrainers);
console.log("addedddddddddddddddddddd");
  // this.router
  //   .navigateByUrl('/refresh', { skipLocationChange: true })
  //   .then(() => {
  //     this.router.navigate(['/athlete']);
  //   });
}

loadTrainers(): void {
  this.http
    .get<any>(this.apiUrl) // Adjust the URL as needed
    .subscribe(
      (data) => {
        this.trainerService.myTrainers$.subscribe(myTrainers => this.myTrainers = myTrainers);
  this.trainerService.trainers$.subscribe(trainers => this.trainers = trainers);
  console.log("loading trainers: ",this.myTrainers);
        this.trainers = data; // Populate the trainers list
        this.myTrainers.forEach((trainer: { trainerId: any; }) => {
          this.trainers = this.trainers.filter(
            (f: { trainerId: any; }) => f.trainerId !== trainer.trainerId
          );
        });
        this.trainerService.updateTrainers(this.trainers);
      },
      (error) => {
        console.error('Error fetching trainers', error);
      }
    );
}

}
