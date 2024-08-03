import { Component } from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatList, MatNavList } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,OnDestroy} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AthleteTeamsMyTeamsComponent } from "./athlete-teams-my-teams/athlete-teams-my-teams.component";
import { AthleteTeamsJoinTeamsComponent } from "./athlete-teams-join-teams/athlete-teams-join-teams.component";
import { AthleteTeamsCreateTeamComponent } from "./athlete-teams-create-team/athlete-teams-create-team.component";


@Component({
  selector: 'app-athlete-teams',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, MatSidenav, MatSidenavContent, MatSidenavContainer, MatNavList, CommonModule, MdbTabsModule, MatToolbarModule, MatButtonModule, AthleteTeamsMyTeamsComponent, AthleteTeamsJoinTeamsComponent, AthleteTeamsCreateTeamComponent],
  templateUrl: './athlete-teams.component.html',
  styleUrl: './athlete-teams.component.css'
})
export class AthleteTeamsComponent {
  selectedTabIndex: number = 0;

  onTabChange(event: MatTabChangeEvent): void {
    this.selectedTabIndex = event.index;
  }
}
