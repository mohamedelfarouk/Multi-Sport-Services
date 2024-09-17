import { Component, Input, OnInit } from '@angular/core';
import { EventManagerDashboardComponent } from './event-manager-dashboard/event-manager-dashboard.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-manager',
  standalone: true,
  imports: [EventManagerDashboardComponent,CommonModule],
  templateUrl: './event-manager.component.html',
  styleUrl: './event-manager.component.css',
})
export class EventManagerComponent implements OnInit{
  userId: number;
  eventManagerData: any; // This will hold the data of the eventManager

  constructor(private router: Router, private http: HttpClient) {
    // Retrieve the user ID from the state passed during navigation
    const navigation = this.router.getCurrentNavigation();
    this.userId = navigation?.extras?.state?.['userId'];
  }

  ngOnInit() {
    if (this.userId) {
      // Make the GET request to fetch the eventManager's data
      this.http
        .get(`http://localhost:8080/api/event-managers/${this.userId}`)
        .subscribe(
          (response) => {
            this.eventManagerData = response;
            console.log('EventManager Data:', this.eventManagerData);
          },
          (error) => {
            console.error('Error fetching eventManager data:', error);
          }
        );
    } else {
      console.error('No userId found in navigation state.');
    }
  }
}
