import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacilityService } from '../facility-manager.service';
import { Facility } from '../facility-manager-create/facility';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-facility-manager-list',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './facility-manager-list.component.html',
  styleUrls: ['./facility-manager-list.component.css']
})
export class FacilityManagerComponent implements OnInit {
  facilityForm: FormGroup;
  facility: Facility | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private facilityService: FacilityService) {
    this.facilityForm = this.fb.group({
      facilityid: ['']
    });
  }

  ngOnInit(): void {}

  fetchFacility(): void {
    const id = this.facilityForm.get('facilityid')?.value;
    if (id) {
      this.facilityService.getFacility(id).subscribe(
        (facility) => {
          this.facility = facility;
          this.errorMessage = null;
        },
        (error) => {
          this.errorMessage = 'Error fetching facility';
          this.facility = null;
          console.error('Error:', error);
        }
      );
    } else {
      this.errorMessage = 'Please enter a valid facility ID';
    }
  }
}
