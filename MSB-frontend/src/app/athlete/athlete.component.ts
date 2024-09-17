import { Component, OnInit } from '@angular/core';
import { AthleteDashboardComponent } from './athlete-dashboard/athlete-dashboard.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-athlete',
  standalone: true,
  imports: [AthleteDashboardComponent],
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {
  userId: number;
  athleteData: any; // This will hold the data of the athlete

  constructor(private router: Router, private http: HttpClient) {
    // Retrieve the user ID from the state passed during navigation
    const navigation = this.router.getCurrentNavigation();
    this.userId = navigation?.extras?.state?.['userId'];
  }

  ngOnInit() {
    if (this.userId) {
      // Make the GET request to fetch the athlete's data
      this.http.get(`http://localhost:8080/api/athletes/${this.userId}`).subscribe(
        (response) => {
          this.athleteData = response;
          console.log('Athlete Data:', this.athleteData);
        },
        (error) => {
          console.error('Error fetching athlete data:', error);
        }
      );
    } else {
      console.error('No userId found in navigation state.');
    }
  }
}
