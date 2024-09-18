import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  MatOption,
  MatOptionModule,
} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-event-manager-edit-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatOptionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule
  ],
  templateUrl: './event-manager-edit-profile.component.html',
  styleUrl: './event-manager-edit-profile.component.css',
})
export class EventManagerEditProfileComponent implements OnInit {
  @Input() eventManagerData:any;

  profileForm: FormGroup;
  profilePicture: string | ArrayBuffer | null = "https://media.istockphoto.com/id/519998671/photo/serious-about-his-fitness.jpg?s=612x612&w=0&k=20&c=oO7B4UtkN-vSxrXTBMtChwc16g8ILoHQU0rh-EZElLY=";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      email: [''],
      phoneNumber: [''],
      birthDate: [''],
      gender: [''],
      address: [''],
    });
  }

  ngOnInit(): void {
    this.loadProfileData();
  }

  loadProfileData(): void {
console.log("athlete DATA IS ",this.eventManagerData);
        this.profileForm.patchValue({
          userId: this.eventManagerData.userId,
          firstName: this.eventManagerData.firstName,
          lastName: this.eventManagerData.lastName,
          username: this.eventManagerData.username,
          email: this.eventManagerData.email,
          phoneNumber: this.eventManagerData.phoneNumber || '', // Default to empty string if null
          birthDate: this.eventManagerData.birthDate
            ? new Date(this.eventManagerData.birthDate)
            : null,
          gender: this.eventManagerData.gender || '',
          address: this.eventManagerData.address || '',
      });
  }

  onApplyChanges(): void {
    const updatedProfile = {
      ...this.profileForm.value,
      birthDate: this.profileForm.value.birthDate ? this.profileForm.value.birthDate.toISOString() : null, // Convert birthDate to ISO format
    };
    console.log('Profile updated:', updatedProfile);

    // Implement logic to save the changes to the backend
    const userId = this.eventManagerData.userId; // Assuming the athlete data has a userId
    const url = `http://localhost:8080/api/event-managers/${userId}`; // Update with your API endpoint

    this.http.put(url, updatedProfile).pipe(
      catchError((error) => {
        console.error('Error updating athlete profile', error);
        return of(null);
      })
    ).subscribe(response => {
      console.log('Profile update response:', response);

    this.router.navigate(['/login']); // Navigate back to profile page
  });

  }

  onCancel(): void {
    this.router.navigate(['/login']); // Navigate back to profile page
  }

  onProfilePictureChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicture = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
