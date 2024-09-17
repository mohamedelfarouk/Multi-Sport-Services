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
import { EventManagerComponent } from '../../event-manager.component';
import { Router } from '@angular/router';
import { EventManagerEditProfileComponent } from '../event-manager-edit-profile/event-manager-edit-profile.component';
@Component({
  selector: 'app-event-manager-profile',
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
    EventManagerEditProfileComponent,
  ],
  templateUrl: './event-manager-profile.component.html',
  styleUrl: './event-manager-profile.component.css',
})
export class EventManagerProfileComponent implements OnInit {
  @Input() eventManagerData: any;
  isEditProfilePressed: boolean = false;
  [x: string]: any;
  eventManager: any;

  constructor(private http: HttpClient, private router: Router) {
    this.eventManager = this.eventManagerData;
    console.log("eventt manager dataaaaaaaaaaa: ",this.eventManager);
  }
  ngOnInit(): void {
    this.eventManager = this.eventManagerData;
  }

  onEditProfile(): void {
    // this.router.navigate(['eventManager/edit-profile']);
    this.isEditProfilePressed = true;
  }
}
