import { Component, OnInit } from '@angular/core';
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
  profileForm: FormGroup;
  sportsList= ['Football','Basketball'];
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
      phone: [''],
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
    // Simulate fetching data from backend
    let profileData: any = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '123-456-7890',
      birthDate: new Date('1990-01-01'),
      gender: '',
      address: '',
      sports: [],
    };
    this.http
      .get<ProfileData>('http://localhost:8080/api/athletes/5')
      .pipe(
        catchError((error) => {
          console.error('Error fetching athletes', error);
          return of([]);
        })
      )
      .subscribe((profileData : any) => {
        this.profileForm.patchValue({
          userId: profileData.userId,
          firstName: profileData.firstName,
          lastName: profileData.lastName,
          username: profileData.username,
          email: profileData.email,
          phoneNumber: profileData.phoneNumber || '', // Default to empty string if null
          birthDate: profileData.birthDate
            ? new Date(profileData.birthDate)
            : null,
          gender: profileData.gender || '',
          address: profileData.address || '',
          sports: profileData.sports || [],
        });
      });
  }

  onApplyChanges(): void {
    const updatedProfile = this.profileForm.value;
    console.log('Profile updated:', updatedProfile);

    // Implement logic to save the changes to the backend

    this.router.navigate(['/profile']); // Navigate back to profile page
  }

  onCancel(): void {
    this.router.navigate(['/profile']); // Navigate back to profile page
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
