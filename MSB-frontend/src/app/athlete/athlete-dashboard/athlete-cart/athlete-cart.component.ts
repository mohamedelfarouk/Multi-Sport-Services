import { Component, inject, Input } from '@angular/core';
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
import { HttpClient } from '@angular/common/http';
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
  @Input() athleteData:any;

  cartItems: any[] = []; // Will be fetched from backend

  private http = inject(HttpClient); // Inject HttpClient

  constructor() {
    this.loadCartData();
  }

  // Fetch cart data from the backend
  loadCartData(): void {
    const athleteId = this.athleteData?.id; // Assume athleteData has the athlete's ID
    if (athleteId) {
      this.http
        .get<any[]>(`/api/athletes/${athleteId}/cart`) // Backend endpoint for fetching cart items
        .subscribe((response) => {
          this.cartItems = response;
        });
    }
  }

  totalCost(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  isEvent(item: any): item is Event {
    return item.type === 'event'; // Assuming backend data has a 'type' field
  }

  isTrainer(item: any): item is Trainer {
    return item.type === 'trainer';
  }

  isFacility(item: any): item is Facility {
    return item.type === 'facility';
  }

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
    });
  }

  // Remove item from the cart
  removeItem(item: any): void {
    const athleteId = this.athleteData?.id;
    if (athleteId && item.id) {
      this.http
        .delete(`/api/athletes/${athleteId}/cart/${item.id}`) // Backend endpoint for removing item
        .subscribe(() => {
          this.cartItems = this.cartItems.filter((i) => i.id !== item.id); // Remove from local cartItems array
        });
    }
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogAnimationsExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
}