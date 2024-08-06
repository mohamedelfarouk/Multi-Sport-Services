import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Facility}   from './facility-manager-create/facility' 
@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private apiUrl = 'http://localhost:8080/api/facilities';

  constructor(private http: HttpClient) {}

  getAllFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.apiUrl);
  }

  getFacility(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${this.apiUrl}/${id}`);
  }

  addFacility(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(`${this.apiUrl}/create`, facility);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`${this.apiUrl}/${id}`, facility);
  }

  deleteFacility(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}