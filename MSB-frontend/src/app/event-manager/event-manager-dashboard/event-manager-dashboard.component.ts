import { Component, Input, OnInit } from '@angular/core';
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
import { EventManagerCreateEventComponent } from '../event-manager-create-event/event-manager-create-event.component';
import { EventManagerNotificationsComponent } from './event-manager-notifications/event-manager-notifications.component';
import { EventManagerProfileComponent } from './event-manager-profile/event-manager-profile.component';
import { HttpClient } from '@angular/common/http';
import { EventManagerComponent } from '../event-manager.component';

@Component({
  selector: 'app-event-manager-dashboard',
  standalone: true,
  imports: [
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
    EventManagerCreateEventComponent,
    EventManagerNotificationsComponent,
    EventManagerProfileComponent,
    EventManagerComponent
  ],
  templateUrl: './event-manager-dashboard.component.html',
  styleUrl: './event-manager-dashboard.component.css',
})
export class EventManagerDashboardComponent implements OnInit {
  @Input() userData: any ;

  numberOfNotifications = 3;

  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 5 }, () => `first Content`);

  isPressedEvents = false;

  isPressedCreateEvent = false;

  toggleButtonEvents(): void {
    this.isPressedEvents = true;
    this.isPressedCreateEvent = false;
  }

  toggleButtonCreateEvent(): void {
    this.isPressedCreateEvent = true;
    this.isPressedEvents = false;
  }

  selectedTabIndex: number = 0;

  onTabChange(event: MatTabChangeEvent): void {
    this.selectedTabIndex = event.index;
  }

  constructor(private http: HttpClient) {
    console.log('user dataaaaaaaaa: ', this.userData);
  }
  ngOnInit(): void {
    console.log('user dataaaaaaaaa22222: ', this.userData);
  }
}
