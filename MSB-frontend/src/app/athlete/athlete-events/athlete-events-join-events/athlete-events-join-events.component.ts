import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-athlete-events-join-events',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './athlete-events-join-events.component.html',
  styleUrl: './athlete-events-join-events.component.css',
})
export class AthleteEventsJoinEventsComponent {
  searchQuery:string = '';
  private apiUrl = 'http://localhost:8080/api/events';

  items = [1, 2, 3];
  searchEvents(): void {
    const searchUrl = `${this.apiUrl}/search?query=${this.searchQuery}`;
    // this.http.get<any[]>(searchUrl).subscribe(data => {
    //   this.facilities = data;
    // }, error => {
    //   console.error("Error fetching search results", error);
    // });
}
}
