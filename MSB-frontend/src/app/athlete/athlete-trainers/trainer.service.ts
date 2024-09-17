import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Trainer } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class TrainerService {
    private trainersSubject = new BehaviorSubject<Trainer[]>([]);
    private myTrainersSubject = new BehaviorSubject<Trainer[]>([]);
  
    trainers$ = this.trainersSubject.asObservable();
    myTrainers$ = this.myTrainersSubject.asObservable();
    private apiUrl = 'http://localhost:8080/api/trainers';

    constructor(private http: HttpClient) { }
  
    updateTrainers(trainers: Trainer[]): void {
      this.trainersSubject.next(trainers);
    }
  
    updateMyTrainers(myTrainers: Trainer[]): void {
      this.myTrainersSubject.next(myTrainers);
    }
    updateAthleteTrainers(id: number, myTrainers: any[]) {
      const url = `${'http://localhost:8080/api/athletes'}/${id}`;
  
      // Only send the fields that need to be updated
      const body = {
        myTrainers: myTrainers,
      };
  
      console.log(
        this.http.put(url, body).subscribe(
          (response) => {
            console.log('Trainers updated successfully:', response);
          },
          (error) => {
            console.error('Error updating Trainers:', error);
          }
        )
      );
    }
    getAthleteTrainers(id: number):any {
      const url = `${'http://localhost:8080/api/athletes'}/${id}`;
      let athleteData: any;
      this.http.get(url).subscribe(
        (response) => {
          console.log('Trainers fetched successfully:', response);
          athleteData = response;
        },
        (error) => {
          console.error('Error fetching Trainers:', error);
        }
      );
      return athleteData.myTrainers;
    }
  }
  