import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Trainer } from './model';

@Injectable({
    providedIn: 'root'
  })
  export class TrainerService {
    private trainersSubject = new BehaviorSubject<Trainer[]>([]);
    private myTrainersSubject = new BehaviorSubject<Trainer[]>([]);
  
    trainers$ = this.trainersSubject.asObservable();
    myTrainers$ = this.myTrainersSubject.asObservable();
  
    constructor() { }
  
    updateTrainers(trainers: Trainer[]): void {
      this.trainersSubject.next(trainers);
    }
  
    updateMyTrainers(myTrainers: Trainer[]): void {
      this.myTrainersSubject.next(myTrainers);
    }
  }