import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://192.168.1.101:3000';

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // You can add other headers if needed
    });
    return this.http.post<any>(`${this.apiUrl}/users`, data, { headers });
  }
  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }
  getDataBasedOnDept(department: String): Observable<any[]> {
    const url = `${this.apiUrl}/users/${department}`;
    return this.http.get<any[]>(url);
  }
}
