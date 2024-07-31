import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-athlete-teams-my-teams',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule,MatButtonModule,MatIconModule,MatGridListModule,CommonModule],
  templateUrl: './athlete-teams-my-teams.component.html',
  styleUrl: './athlete-teams-my-teams.component.css'
})
export class AthleteTeamsMyTeamsComponent {
  items = [1, 2, 3];

}
