import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TrainingSession } from './trainer-create-update/trainer-create-update';  // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  private apiUrl = 'http://localhost:8080/api/training-sessions';  

  constructor(private http: HttpClient) { }
  createSession(sessionData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/new`, sessionData);
  }
  getTrainingSessionById(id: number): Observable<TrainingSession> {
    return this.http.get<TrainingSession>(`${this.apiUrl}/${id}`);
  }
  deleteTrainingSession(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  private handleError(error: any) {
     
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}
