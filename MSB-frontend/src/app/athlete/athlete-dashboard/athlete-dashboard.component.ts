import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-athlete-dashboard',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './athlete-dashboard.component.html',
  styleUrl: './athlete-dashboard.component.css'
})
export class AthleteDashboardComponent {

}
