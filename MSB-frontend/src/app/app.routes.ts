 import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AthleteComponent } from './athlete/athlete.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
<<<<<<< HEAD
import {EventManagerComponent} from "./event-manager/event-manager.component";
import { AthleteEditProfileComponent } from './athlete/athlete-dashboard/athlete-edit-profile/athlete-edit-profile.component';


export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registeration', component: SignUpComponent },
  { path: 'athlete', component: AthleteComponent },
  { path: 'athlete/edit-profile', component: AthleteEditProfileComponent },

  {path:'eventMan',component:EventManagerComponent}
=======
import { EventManagerComponent } from './event-manager/event-manager.component';
import{FacilityManagerDashboardComponent}from './facility-manager/facility-manager-dashboard/facility-manager-dashboard.component'
import{trainerDashboardComponent}from './trainer/trainer-dashboard/trainer-dashboard.component';
export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: SignUpComponent },
  { path: 'athlete', component: AthleteComponent },
  { path: 'eventMan', component: EventManagerComponent },
  { path: 'facilityManager', component:FacilityManagerDashboardComponent},
  { path: 'trainer' ,component:trainerDashboardComponent}
>>>>>>> a35c7e8b0587ac81c7c0bf5d7bfba135387068dd
];
