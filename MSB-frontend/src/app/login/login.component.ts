import { Component } from '@angular/core';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {FormControl,FormGroup, Validators, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    /* other modules */
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // Get better access to form controls in the template
  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginData = {
        identifier: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      };

      // Call the backend API for login
      this.http.post('http://localhost:8080/api/login', loginData).subscribe(
        (response: any) => {
          console.log('Login successful:', response);

          // Check role and redirect to the appropriate dashboard
          const role = response.role;
          const userId = response.userId;

          switch (role) {
            case 'Athlete':
              this.router.navigate(['/athlete'], { state: { userId: userId } });
              break;
            case 'Event Manager':
              this.router.navigate(['/eventMan'], { state: { userId: userId } });
              break;
            case 'Facility Manager':
              this.router.navigate(['/facilityManager'], { state: { userId: userId } });
              break;
            case 'Trainer':
              this.router.navigate(['/trainer'], { state: { userId: userId } });
              break;
            default:
              console.error('Unknown role:', role);
              break;
          }
        },
        (error) => {
          console.error('Login failed:', error);
          // Handle login failure (e.g., show error messages to the user)
        }
      );
    } else {
      this.loginForm.markAllAsTouched(); // Mark all fields as touched to trigger validation
    }
  }
}
