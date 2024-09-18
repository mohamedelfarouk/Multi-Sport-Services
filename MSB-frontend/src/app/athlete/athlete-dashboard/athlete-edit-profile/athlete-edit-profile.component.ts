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
import { ProfileData } from './ProfileData';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-athlete-edit-profile',
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
  templateUrl: './athlete-edit-profile.component.html',
  styleUrl: './athlete-edit-profile.component.css',
})
export class AthleteEditProfileComponent implements OnInit {
  @Input() athleteData:any;

  profileForm: FormGroup;
  sportsList= ['Football','Basketball'];
  profilePicture: string | ArrayBuffer | null = "https://th.bing.com/th/id/OIP.dBe41l9AV5lmJ9tpPLTgzwAAAA?rs=1&pid=ImgDetMain";

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
      sports: [[]],
    });
  }

  ngOnInit(): void {
    this.loadProfileData();
  }

  loadProfileData(): void {
console.log("athlete DATA IS ",this.athleteData);
        this.profileForm.patchValue({
          userId: this.athleteData.userId,
          firstName: this.athleteData.firstName,
          lastName: this.athleteData.lastName,
          username: this.athleteData.username,
          email: this.athleteData.email,
          phoneNumber: this.athleteData.phoneNumber || '', // Default to empty string if null
          birthDate: this.athleteData.birthDate
            ? new Date(this.athleteData.birthDate)
            : null,
          gender: this.athleteData.gender || '',
          address: this.athleteData.address || '',
          sports: this.athleteData.sports || [],});
  }

  onApplyChanges(): void {
    const updatedProfile = {
      ...this.profileForm.value,
      birthDate: this.profileForm.value.birthDate ? this.profileForm.value.birthDate.toISOString() : null, // Convert birthDate to ISO format
    };
    console.log('Profile updated:', updatedProfile);

    // Implement logic to save the changes to the backend
    const userId = this.athleteData.userId; // Assuming the athlete data has a userId
    const url = `http://localhost:8080/api/athletes/${userId}`; // Update with your API endpoint

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
