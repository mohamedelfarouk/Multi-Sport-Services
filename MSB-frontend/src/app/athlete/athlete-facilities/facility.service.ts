import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Facilityint } from './model';

@Injectable({
  providedIn: 'root',
})
export class FacilityService {
  private facilitiesSubject = new BehaviorSubject<any>([]);
  private myFacilitiesSubject = new BehaviorSubject<any>([]);

  facilities$ = this.facilitiesSubject.asObservable();
  myFacilities$ = this.myFacilitiesSubject.asObservable();
  private apiUrl = 'http://localhost:8080/api/athletes';

  constructor(private http: HttpClient) {}

  updateFacilities(facilities: any): void {
    this.facilitiesSubject.next(facilities);
  }

  updateMyFacilities(myFacilities: any): void {
    this.myFacilitiesSubject.next(myFacilities);
    console.log('in update my facilities');
  }
  updateAthleteFacilities(id: number, myFacilities: any[]) {
    const url = `${this.apiUrl}/${id}`;

    // Only send the fields that need to be updated
    const body = {
      myFacilities: myFacilities,
    };

    console.log(
      this.http.put(url, body).subscribe(
        (response) => {
          console.log('Facilities updated successfully:', response);
        },
        (error) => {
          console.error('Error updating facilities:', error);
        }
      )
    );
  }
  getAthleteFacilities(id: number):any {
    const url = `${this.apiUrl}/${id}`;
    let athleteData: any;
    this.http.get(url).subscribe(
      (response) => {
        console.log('Facilities fetched successfully:', response);
        athleteData = response;
      },
      (error) => {
        console.error('Error fetching facilities:', error);
      }
    );
    return athleteData.myFacilities;
  }
}
