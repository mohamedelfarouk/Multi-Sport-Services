import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Facilityint } from './model';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private facilitiesSubject = new BehaviorSubject<Facilityint[]>([]);
  private myFacilitiesSubject = new BehaviorSubject<Facilityint[]>([]);

  facilities$ = this.facilitiesSubject.asObservable();
  myFacilities$ = this.myFacilitiesSubject.asObservable();

  constructor() { }

  updateFacilities(facilities: Facilityint[]): void {
    this.facilitiesSubject.next(facilities);
  }

  updateMyFacilities(myFacilities: Facilityint[]): void {
    this.myFacilitiesSubject.next(myFacilities);
  }
}
