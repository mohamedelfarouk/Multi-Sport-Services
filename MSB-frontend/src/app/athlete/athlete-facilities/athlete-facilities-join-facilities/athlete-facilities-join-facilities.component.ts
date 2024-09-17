import { Component, Input, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacilityType } from '../model';
import { Router } from '@angular/router';
import { FacilityService } from '../facility.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-athlete-facilities-join-facilities',
  standalone: true,
  imports: [
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    CommonModule,
    MatFormFieldModule,MatInputModule,FormsModule
  ],
  templateUrl: './athlete-facilities-join-facilities.component.html',
  styleUrl: './athlete-facilities-join-facilities.component.css',
})
export class AthleteFacilitiesJoinFacilitiesComponent implements OnInit {
  facilities:any = []; // Use the Facility type
  myFacilities:any = []; // List of selected facilities
  searchQuery:string = '';
  private apiUrl = 'http://localhost:8080/api/facilities';


@Input() userData:any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private facilityService: FacilityService
  ) {}

  ngOnInit(): void {
    this.loadFacilities();
  }
  searchFacilities(): void {
      const searchUrl = `${this.apiUrl}/search?query=${this.searchQuery}`;
      this.http.get<any[]>(searchUrl).subscribe(data => {
        this.facilities = data;
      }, error => {
        console.error("Error fetching search results", error);
      });
  }
  
  addFacilityToMyFacilities(facility: any): void {
    this.facilityService.myFacilities$.subscribe(myFacilities => this.myFacilities = myFacilities);
    this.facilityService.facilities$.subscribe(facilities => this.facilities = facilities);
    // Remove the facility from availableFacilities
    this.facilities = this.facilities.filter(
      (f: { facilityId: any; }) => f.facilityId !== facility.facilityId
    );

    // Add the facility to myFacilities
    this.myFacilities.push(facility);
    this.facilityService.updateFacilities(this.facilities);
    this.facilityService.updateMyFacilities(this.myFacilities);
    this.facilityService.updateAthleteFacilities(this.userData.userId,this.myFacilities);

    // this.router
    //   .navigateByUrl('/refresh', { skipLocationChange: true })
    //   .then(() => {
    //     this.router.navigate(['/athlete']);
    //   });
  }

  loadFacilities(): void {
    this.http
      .get<any>('http://localhost:8080/api/facilities') // Adjust the URL as needed
      .subscribe(
        (data) => {
          this.facilityService.myFacilities$.subscribe(myFacilities => this.myFacilities = myFacilities);
    this.facilityService.facilities$.subscribe(facilities => this.facilities = facilities);
    console.log("loading: ",this.myFacilities);
          this.facilities = data; // Populate the facilities list
          this.myFacilities.forEach((facility: { facilityId: any; }) => {
            this.facilities = this.facilities.filter(
              (f: { facilityId: any; }) => f.facilityId !== facility.facilityId
            );
          });
          this.facilityService.updateFacilities(this.facilities);
        },
        (error) => {
          console.error('Error fetching facilities', error);
        }
      );
  }

  getFacilityTypeName(facilityType: FacilityType): string {
    // Return a human-readable name for the facility type
    return FacilityType[facilityType];
  }
}
