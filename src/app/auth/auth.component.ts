import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode}from 'jwt-decode';  // ✅ Import jwt-decode

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  private apiurl = 'http://localhost:3000/admins';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: { email: string, password: string }) {
    return this.http.post(`${this.apiurl}/login`, credentials);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token && !this.isTokenExpired(token);
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);  
      return decoded.exp * 1000 < Date.now();
    } catch (error) {
      return true; // Assume expired if decoding fails
    }
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const decoded: any = jwtDecode(token);
      return decoded.role === 'admin';
    } catch (error) {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
