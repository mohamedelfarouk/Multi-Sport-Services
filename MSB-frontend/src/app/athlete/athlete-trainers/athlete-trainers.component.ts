import { Component, Input } from '@angular/core';
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
import { AthleteTrainersMyTrainersComponent } from "./athlete-trainers-my-trainers/athlete-trainers-my-trainers.component";
import { AthleteTrainersBookTrainersComponent } from "./athlete-trainers-book-trainers/athlete-trainers-book-trainers.component";


@Component({
  selector: 'app-athlete-trainers',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, MatSidenav, MatSidenavContent, MatSidenavContainer, MatNavList, CommonModule, MdbTabsModule, MatToolbarModule, MatButtonModule, AthleteTrainersMyTrainersComponent, AthleteTrainersBookTrainersComponent],
  templateUrl: './athlete-trainers.component.html',
  styleUrl: './athlete-trainers.component.css'
})
export class AthleteTrainersComponent {
  @Input() athleteData:any;

  selectedTabIndex: number = 0;

  onTabChange(event: MatTabChangeEvent): void {
    this.selectedTabIndex = event.index;
  }
}
