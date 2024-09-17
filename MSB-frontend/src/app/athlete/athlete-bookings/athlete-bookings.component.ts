import { Component, inject, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Booking } from './Booking';

@Component({
  selector: 'app-athlete-bookings',
  standalone: true,
  imports: [MatListModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    CommonModule,
  ],
    templateUrl: './athlete-bookings.component.html',
  styleUrl: './athlete-bookings.component.css'
})
export class AthleteBookingsComponent {
  @Input() athleteData:any;

  bookings = [
new Booking("event name","Event","12/12/2023","Paid",1000,"15/12/2023","16/12/2023"),
new Booking("facility name" ,"Facility package","12/12/2023","Paid",4000,"15/12/2023","16/12/2023"),
new Booking("Trainer name" ,"Trainer package","12/12/2023","Paid",5000,"15/12/2023","16/12/2023"),

  ];

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
    });
  }
}
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class DialogAnimationsExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
}