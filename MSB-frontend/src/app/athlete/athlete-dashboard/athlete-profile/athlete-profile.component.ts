import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-athlete-profile',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './athlete-profile.component.html',
  styleUrl: './athlete-profile.component.css',
})
export class AthleteProfileComponent implements OnInit {
  athlete: any = {
    "userId": 0,
    "firstName": "",
    "lastName": "",
    "name": "",
    "email": "",
    "username": "",
    "birthDate": null,
    "creationDate": "",
    "phoneNumber": null,
    "password": "",
    "following": [],
    "followers": [],
    "gender": null,
    "address": null,
    "sports": [],
    "numFollowing": 0,
    "numFollowers": 0
  };
  constructor(private http: HttpClient,private router: Router) {}
  ngOnInit(): void {
    let obs = this.http.get('http://localhost:8080/api/athletes/5');
    obs.
    // pipe(
    //   catchError(error => {
    //     console.error('Error fetching athletes', error);
    //     return of([]);
    //   })
    // ).
    subscribe((response) => (this.athlete = response));  }

  onEditProfile(): void {
    this.router.navigate(['athlete/edit-profile']);
  }
}
