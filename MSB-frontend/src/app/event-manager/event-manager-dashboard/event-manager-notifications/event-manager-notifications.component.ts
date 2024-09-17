import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-event-manager-notifications',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './event-manager-notifications.component.html',
  styleUrl: './event-manager-notifications.component.css',
})
export class EventManagerNotificationsComponent implements OnInit{
  @Input() eventManagerData:any;
  ngOnInit(): void {
console.log("data in notifications :", this.eventManagerData);  }

}
