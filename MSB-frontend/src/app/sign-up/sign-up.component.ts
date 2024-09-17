import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  signupForm: FormGroup;
  emailAlreadyInUse: boolean = false;
  usernameAlreadyInUse: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', []],
      lastName: ['', []],
      role: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      birthDate: ['', []],
      phoneNumber: ['', []],
      gender: ['', []],
      address: ['', []],
    });
  }

  // To get better access to form controls in the template
  get f() {
    return this.signupForm.controls;
  }

  // Check form validity before proceeding
  onSignup() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      const role = formData.role;

      // Determine the URL based on the role
      let url = '';
      switch (role) {
        case 'Athlete':
          url = 'http://localhost:8080/api/athletes/signup';
          break;
        case 'Trainer':
          url = 'http://localhost:8080/api/trainers/signup';
          break;
        case 'Facility Manager':
          url = 'http://localhost:8080/api/facility-managers/signup';
          break;
        case 'Event Organizer':
          url = 'http://localhost:8080/api/event-managers/signup';
          break;
        default:
          url = ''; // Handle unknown role
      }

      // Make the POST request to the backend
      this.http.post(url, formData, { responseType: 'text' }).subscribe(
        (response) => {
          console.log('Signup successful:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Signup failed:', error);
  
          // Reset existing errors
          this.signupForm.get('email')?.setErrors(null);
          this.signupForm.get('username')?.setErrors(null);
  
          // Handle specific errors from the backend
          if (error.error === 'Email is already in use.') {
            this.signupForm.get('email')?.setErrors({ emailInUse: true });
          } else if (error.error === 'Username is already in use.') {
            this.signupForm.get('username')?.setErrors({ usernameInUse: true });
          }
  
          // Mark all fields as touched to trigger validation
          this.signupForm.markAllAsTouched();
          // Optionally, handle signup error, e.g., display error message
          console.log(this.emailAlreadyInUse);
          console.log(this.usernameAlreadyInUse);
        }
      );
    } else {
      this.signupForm.markAllAsTouched(); // Mark all fields as touched to trigger validation
    }
  }
}
