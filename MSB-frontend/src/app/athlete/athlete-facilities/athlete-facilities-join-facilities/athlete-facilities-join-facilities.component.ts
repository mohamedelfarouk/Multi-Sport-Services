import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacilityType, Facilityint } from '../model';
import { Router } from '@angular/router';
import { FacilityService } from '../facility.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
    MatFormFieldModule,MatInputModule
  ],
  templateUrl: './athlete-facilities-join-facilities.component.html',
  styleUrl: './athlete-facilities-join-facilities.component.css',
})
export class AthleteFacilitiesJoinFacilitiesComponent implements OnInit {
  facilities: Facilityint[] = []; // Use the Facility type
  myFacilities: Facilityint[] = []; // List of selected facilities

  constructor(
    private http: HttpClient,
    private router: Router,
    private facilityService: FacilityService
  ) {}

  ngOnInit(): void {
    this.loadFacilities();
  }
  addFacilityToMyFacilities(facility: Facilityint): void {
    // Remove the facility from availableFacilities
    this.facilities = this.facilities.filter(
      (f) => f.facilityId !== facility.facilityId
    );

    // Add the facility to myFacilities
    this.myFacilities.push(facility);
    this.facilityService.updateFacilities(this.facilities);
    this.facilityService.updateMyFacilities(this.myFacilities);
    this.router
      .navigateByUrl('/refresh', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/athlete']);
      });
  }

  loadFacilities(): void {
    this.http
      .get<Facilityint[]>('http://localhost:8080/api/facilities') // Adjust the URL as needed
      .subscribe(
        (data) => {
          this.facilities = data; // Populate the facilities list
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
