import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AthleteComponent } from './athlete/athlete.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {EventManagerComponent} from "./event-manager/event-manager.component";
import { AthleteEditProfileComponent } from './athlete/athlete-dashboard/athlete-edit-profile/athlete-edit-profile.component';


export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registeration', component: SignUpComponent },
  { path: 'athlete', component: AthleteComponent },
  { path: 'athlete/edit-profile', component: AthleteEditProfileComponent },

  {path:'eventMan',component:EventManagerComponent}
];
