import { Component } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatList, MatNavList } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {trainerCreateUpdateComponent } from '../trainer-create-update/trainer-create-update.component';
import { MatBadgeModule } from '@angular/material/badge';
import { TrainerListComponent } from "../trainer-list/trainer-list.component"; 
import {TrainerDeleteComponent} from "../trainer-delete/trainer-delete.component"
@Component({
  selector: 'app-trainer-dashboard',
  standalone: true,
  imports: [
    MatBadgeModule,
    MatTabsModule,
    MatIconModule,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MatNavList,
    CommonModule,
    MdbTabsModule,
    MatToolbarModule,
    MatButtonModule,
    trainerCreateUpdateComponent,
    TrainerListComponent,
    TrainerDeleteComponent
],
  templateUrl: './trainer-dashboard.component.html',
  styleUrl: './trainer-dashboard.component.css',
})


export class trainerDashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 3 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 3 }, () => `first Content`);
 



  numberOfNotifications = 5;
  isPressedCreateUpdate = false;
  isPressedList = false;
  isPressedDelete = false;
   
  toggleButtonCreateUpdate(): void {
    this.isPressedCreateUpdate = true;
    (this.isPressedList = false),
      (this.isPressedDelete = false)
       }
 
  toggleButtonList(): void {
    this.isPressedList = true ;
    (this.isPressedCreateUpdate = false),
      (this.isPressedDelete = false)
       }
  
  toggleButtonDelete(): void {
    this.isPressedDelete= true;
     (this.isPressedList=false),
      (this.isPressedCreateUpdate = false)
  }

   selectedTabIndex: number = 0;

  onTabChange(event: any): void {
    this.selectedTabIndex = event.index;
  }

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
