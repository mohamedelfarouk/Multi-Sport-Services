import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-athlete-profile',
  standalone: true,
  imports: [MatListModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    CommonModule,
  ],  templateUrl: './athlete-profile.component.html',
  styleUrl: './athlete-profile.component.css'
})
export class AthleteProfileComponent {

}
