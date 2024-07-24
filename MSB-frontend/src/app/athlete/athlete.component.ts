import { Component } from '@angular/core';
import { AthleteDashboardComponent } from './athlete-dashboard/athlete-dashboard.component';

@Component({
  selector: 'app-athlete',
  standalone: true,
  imports: [AthleteDashboardComponent],
  templateUrl: './athlete.component.html',
  styleUrl: './athlete.component.css'
})
export class AthleteComponent {

}
