import { Component, Input, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';
import { AthleteComponent } from '../../athlete.component';
import { AthleteEditProfileComponent } from "../athlete-edit-profile/athlete-edit-profile.component";
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
    HttpClientModule,
    AthleteEditProfileComponent
],
  templateUrl: './athlete-profile.component.html',
  styleUrl: './athlete-profile.component.css',
})
export class AthleteProfileComponent implements OnInit {
  @Input() athleteData: any;
  isEditProfilePressed:boolean=false;
  [x: string]: any;
  athlete: any;
  // {
  //   "userId": 0,
  //   "firstName": "",
  //   "lastName": "",
  //   "name": "",
  //   "email": "",
  //   "username": "",
  //   "birthDate": null,
  //   "creationDate": "",
  //   "phoneNumber": null,
  //   "password": "",
  //   "following": [],
  //   "followers": [],
  //   "gender": null,
  //   "address": null,
  //   "sports": [],
  //   "numFollowing": 0,
  //   "numFollowers": 0
  // };
  constructor(private http: HttpClient, private router: Router) {
    this.athlete = this.athleteData;
  }
  ngOnInit(): void {
    this.athlete = this.athleteData;
  }

  onEditProfile(): void {
    // this.router.navigate(['athlete/edit-profile']);
    this.isEditProfilePressed=true;
  }
}
