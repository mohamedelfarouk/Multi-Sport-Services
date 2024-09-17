import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-athlete-notifications',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './athlete-notifications.component.html',
  styleUrl: './athlete-notifications.component.css',
})
export class AthleteNotificationsComponent {
  @Input() athleteData:any;

}
