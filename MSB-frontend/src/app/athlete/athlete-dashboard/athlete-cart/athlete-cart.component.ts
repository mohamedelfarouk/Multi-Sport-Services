import { Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Event } from './Event';
import { Trainer } from './Trainer';
import { Facility } from './Facility';
@Component({
  selector: 'app-athlete-cart',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    CommonModule,
  ],
  templateUrl: './athlete-cart.component.html',
  styleUrl: './athlete-cart.component.css',
})
export class AthleteCartComponent {
  cartItems = [
    new Event('event name', '12/11/2024 : 13/11/2024', 1000),
    new Event('event name', '11/11/2024 : 13/11/2024', 2000),
    new Trainer('trainer name', '11/7/2024 : 13/8/2024', 500),
    new Facility('facility name', 2000),
  ];
  totalCost(){
   let sum=0;
   this.cartItems.forEach(element => {
    sum+=element.price;
   });
return sum;
  }
  isEvent(item: any): item is Event {
    return item instanceof Event;
  }

  isTrainer(item: any): item is Trainer {
    return item instanceof Trainer;
  }
  isFacility(item: any): item is Facility {
    return item instanceof Facility;
  }
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
