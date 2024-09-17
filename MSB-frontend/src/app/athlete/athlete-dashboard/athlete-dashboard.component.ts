import { Component, Input, input } from '@angular/core';
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
import { AthleteFacilitiesComponent } from '../athlete-facilities/athlete-facilities.component';
import { AthleteBookingsComponent } from '../athlete-bookings/athlete-bookings.component';
import { AthleteEventsComponent } from '../athlete-events/athlete-events.component';
import { AthleteTeamsComponent } from '../athlete-teams/athlete-teams.component';
import { AthleteTrainersComponent } from '../athlete-trainers/athlete-trainers.component';
import { MatBadgeModule } from '@angular/material/badge';
import { AthleteCartComponent } from './athlete-cart/athlete-cart.component';
import { AthleteProfileComponent } from './athlete-profile/athlete-profile.component';
import { HttpClient } from '@angular/common/http';
import { AthleteNotificationsComponent } from './athlete-notifications/athlete-notifications.component';
import { AthleteEditProfileComponent } from "./athlete-edit-profile/athlete-edit-profile.component";

@Component({
  selector: 'app-athlete-dashboard',
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
    AthleteFacilitiesComponent,
    AthleteBookingsComponent,
    AthleteEventsComponent,
    AthleteTeamsComponent,
    AthleteTrainersComponent,
    AthleteCartComponent,
    AthleteProfileComponent,
    AthleteNotificationsComponent,
    AthleteEditProfileComponent
],
  templateUrl: './athlete-dashboard.component.html',
  styleUrl: './athlete-dashboard.component.css',
})
export class AthleteDashboardComponent implements OnDestroy {
  @Input() userData:any;

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 5 }, () => `first Content`);

  numberOfNotifications = 3;
  isPressedFacilities = true;
  isPressedTrainers = false;
  isPressedEvents = false;
  isPressedTeams = false;
  isPressedBookings = false;

  toggleButtonFacilities(): void {
    this.isPressedFacilities = true;
    (this.isPressedTrainers = false),
      (this.isPressedEvents = false),
      (this.isPressedTeams = false),
      (this.isPressedBookings = false);
  }
  toggleButtonTrainers(): void {
    this.isPressedTrainers = true;
    (this.isPressedFacilities = false),
      (this.isPressedEvents = false),
      (this.isPressedTeams = false),
      (this.isPressedBookings = false);
  }
  toggleButtonEvents(): void {
    this.isPressedEvents = true;
    (this.isPressedTrainers = false),
      (this.isPressedFacilities = false),
      (this.isPressedTeams = false),
      (this.isPressedBookings = false);
  }
  toggleButtonTeams(): void {
    this.isPressedTeams = true;
    (this.isPressedTrainers = false),
      (this.isPressedEvents = false),
      (this.isPressedFacilities = false),
      (this.isPressedBookings = false);
  }
  toggleButtonBookings(): void {
    this.isPressedBookings = true;
    (this.isPressedTrainers = false),
      (this.isPressedEvents = false),
      (this.isPressedTeams = false),
      (this.isPressedFacilities = false);
  }

  isEditProfilePressed: boolean = false;
  toggleButtonEditProfile(): void {
    this.isEditProfilePressed = true;
  }
  selectedTabIndex: number = 0;

  onTabChange(event: any): void {
    this.selectedTabIndex = event.index;
  }

  private _mobileQueryListener: () => void;
  // private response: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // let obs = http.get('http://localhost:8080/api/athletes/signup');
    // obs.subscribe((response) => (this.response = response));
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
