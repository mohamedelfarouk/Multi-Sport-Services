import { Component, NgModule } from '@angular/core';
import{FacilityService}from '../facility-manager.service'
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-facility-manager-delete',
  templateUrl: './facility-manager-delete.component.html',
  styleUrls: ['./facility-manager-delete.component.css'],
  imports: [CommonModule]
})
export class FacilityManagerDeleteComponent {
  facilityId: number | null = null;
  message: string | null = null;

  constructor(private facilityService: FacilityService) {}

  deleteFacility(): void {
     
    const inputElement = document.getElementById('facilityId') as HTMLInputElement;
    this.facilityId = Number(inputElement.value);

    if (this.facilityId) {
      this.facilityService.deleteFacility(this.facilityId).subscribe(
        () => {
          this.message = 'Facility deleted successfully.';
        },
        (error) => {
          this.message = 'Error deleting training session.';
          console.error('Error:', error);
        }
      );
    } else {
      this.message = 'Please enter a valid session ID';
    }
  }
}
