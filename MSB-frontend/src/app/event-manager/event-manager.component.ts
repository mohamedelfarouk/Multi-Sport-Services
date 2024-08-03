import { Component } from '@angular/core';
import { EventManagerDashboardComponent } from './event-manager-dashboard/event-manager-dashboard.component';

@Component({
  selector: 'app-event-manager',
  standalone: true,
  imports: [EventManagerDashboardComponent],
  templateUrl: './event-manager.component.html',
  styleUrl: './event-manager.component.css'
})
export class EventManagerComponent {

}
