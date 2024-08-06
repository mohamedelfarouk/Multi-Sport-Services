import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacilityService } from '../facility-manager.service';
import { Facility } from './facility';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-facility-manager-create',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './facility-manager-create.component.html',
  styleUrls: ['./facility-manager-create.component.css']
})
export class FacilityManagerCreateComponent implements OnInit {
  facilities: Facility[] = [];
  facility: Facility = {
    facilityId: 0,
    facilityName: '',
    facilityType: '',
    address: '',
    location: '',
    phoneNumber: '',
    email: '',
    ratings: 0,
    amenities: '',
    facilityManager: {
      userId: 0,
      firstName: '',
      lastName: ''
    }
  };

  sessionForm: FormGroup;
  facilityTypes: string[] = [
    'FOOTBALL_11V11',
    'FOOTBALL_7V7',
    'FOOTBALL_5V5',
    'BASKETBALL_INDOOR',
    'BASKETBALL_OUTDOOR',
    'VOLLEYBALL_INDOOR',
    'VOLLEYBALL_OUTDOOR',
    'TENNIS_CLAY',
    'TENNIS_GRASS',
    'TENNIS_HARD',
    'PADEL_SINGLE',
    'PADEL_DOUBLE',
    'BOWLING_ALLEY',
    'POOL_TABLE'
  ];

  constructor(
    private fb: FormBuilder,
    private facilityService: FacilityService
  ) {
    this.sessionForm = this.fb.group({
      facilityName: [''],
      facilityType: [''],
      address: [''],
      location: [''],
      phoneNumber: [''],
      email: [''],
      ratings: [''],
      amenities: [''],
      facilityManagerId: [''],
      facilityManagerFirstName: [''],
      facilityManagerLastName: ['']
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const formValues = this.sessionForm.value;

    const facilityData: Facility = {
      facilityId: 0, // Assuming facilityId is auto-generated
      facilityName: formValues.facilityName,
      facilityType: formValues.facilityType,
      address: formValues.address,
      location: formValues.location,
      phoneNumber: formValues.phoneNumber,
      email: formValues.email,
      ratings: formValues.ratings,
      amenities: formValues.amenities,
      facilityManager: {
        userId: formValues.facilityManagerId,
        firstName: formValues.facilityManagerFirstName,
        lastName: formValues.facilityManagerLastName
      }
    };

    this.createFacility(facilityData);
  }

  createFacility(facilityData: Facility): void {
    this.facilityService.addFacility(facilityData).subscribe(
      response => {
        console.log('Facility saved', response);
      },
      error => {
        console.error('Error', error);
      }
    );
  }
}
