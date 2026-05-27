import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private apiUrl = 'https://localhost:5001/api/autorizacion';

  registrar(data: any) {
    return this.http.post(`${this.apiUrl}/registrar`, data);
  }

  login(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
