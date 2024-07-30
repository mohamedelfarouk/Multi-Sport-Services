import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-athlete-trainers-book-trainers',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule,MatButtonModule,MatIconModule,MatGridListModule,CommonModule],
  templateUrl: './athlete-trainers-book-trainers.component.html',
  styleUrl: './athlete-trainers-book-trainers.component.css'
})
export class AthleteTrainersBookTrainersComponent {
  items = [1, 2, 3];
email="example@example.com"
}
