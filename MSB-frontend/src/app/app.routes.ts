import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AthleteComponent } from './athlete/athlete.component';
import {EventManagerComponent} from "./event-manager/event-manager.component";


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'sign-up', component: SignUpComponent },
  {path:'athlete',component:AthleteComponent},
  {path:'eventMan',component:EventManagerComponent}
];
