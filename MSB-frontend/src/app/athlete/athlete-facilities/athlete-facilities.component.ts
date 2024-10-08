import { Component, Input, OnInit } from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatList, MatNavList } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AthleteFacilitiesJoinFacilitiesComponent } from './athlete-facilities-join-facilities/athlete-facilities-join-facilities.component';
import { AthleteFacilitiesMyFacilitiesComponent } from './athlete-facilities-join-facilities/athlete-facilities-my-facilities/athlete-facilities-my-facilities.component';
import { FacilityService } from './facility.service';


@Component({
  selector: 'app-athlete-facilities',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, MatSidenav, MatSidenavContent, MatSidenavContainer, MatNavList, CommonModule, MdbTabsModule, MatToolbarModule, MatButtonModule,AthleteFacilitiesJoinFacilitiesComponent,AthleteFacilitiesMyFacilitiesComponent],
  templateUrl: './athlete-facilities.component.html',
  styleUrl: './athlete-facilities.component.css'
})
export class AthleteFacilitiesComponent  implements OnInit{
  @Input() athleteData:any;
  facilities:any;
  constructor(private facilityService: FacilityService){
  }
  ngOnInit(): void {
this.facilities=this.athleteData.myFacilities;
console.log(this.facilities);

// this.facilityService.updateMyFacilities(this.facilities);
console.log("////////////////////");
console.log(this.facilities);
  }
  selectedTabIndex: number = 0;

  onTabChange(event: MatTabChangeEvent): void {
    this.selectedTabIndex = event.index;
  }
}
