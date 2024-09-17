import { Component, Input } from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatList, MatNavList } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AthleteEventsMyEventsComponent } from "./athlete-events-my-events/athlete-events-my-events.component";
import { AthleteEventsJoinEventsComponent } from "./athlete-events-join-events/athlete-events-join-events.component";


@Component({
  selector: 'app-athlete-events',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, MatSidenav, MatSidenavContent, MatSidenavContainer, MatNavList, CommonModule, MdbTabsModule, MatToolbarModule, MatButtonModule, AthleteEventsMyEventsComponent, AthleteEventsJoinEventsComponent],
  templateUrl: './athlete-events.component.html',
  styleUrl: './athlete-events.component.css'
})
export class AthleteEventsComponent {
  selectedTabIndex: number = 0;
  @Input() athleteData:any;

  onTabChange(event: MatTabChangeEvent): void {
    this.selectedTabIndex = event.index;
  }
}
