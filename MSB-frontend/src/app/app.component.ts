import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AthleteDashboardComponent } from './athlete/athlete-dashboard/athlete-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule,AthleteDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MSB-frontend';
  constructor(private http: HttpClient){

  }
}
