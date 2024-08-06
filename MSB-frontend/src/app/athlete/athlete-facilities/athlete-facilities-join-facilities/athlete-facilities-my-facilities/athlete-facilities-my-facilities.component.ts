import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { FacilityService } from '../../facility.service';
import { Facilityint } from '../../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-athlete-facilities-my-facilities',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule,MatButtonModule,MatIconModule,MatGridListModule,CommonModule],
  templateUrl: './athlete-facilities-my-facilities.component.html',
  styleUrl: './athlete-facilities-my-facilities.component.css'
})
export class AthleteFacilitiesMyFacilitiesComponent implements OnInit {
  myFacilities: Facilityint[] = [];
  allFacilities: Facilityint[] = [];

  constructor(private facilityService: FacilityService ,private router:Router) { }

  ngOnInit(): void {
    this.facilityService.myFacilities$.subscribe(myFacilities => this.myFacilities = myFacilities);
    this.facilityService.facilities$.subscribe(facilities => this.allFacilities = facilities);
  }

  removeFacility(facility: Facilityint): void {
    // Remove the facility from myFacilities
    this.myFacilities = this.myFacilities.filter(f => f.facilityId !== facility.facilityId);
this.allFacilities.push(facility);
    // Update My Facilities in the service
    this.facilityService.updateMyFacilities(this.myFacilities);

    // Add the facility back to allFacilities
    const updatedFacilities = [...this.allFacilities, facility];
    this.facilityService.updateFacilities(updatedFacilities);
  }
}