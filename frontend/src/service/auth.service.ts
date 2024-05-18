import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Evento, AvailableData, User } from '../types';

// const url = 'https://back-lemon.vercel.app';
const url = 'http://localhost:4000';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private apiService: ApiService, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.apiService.post(`${url}/login`, { username, password });
  }
  addEvent(evento: Evento): Observable<any> {
    return this.apiService.post(`${url}/addEvent`, evento);
  }
  getEvent(): Observable<any> {
    return this.apiService.get(`${url}/getEvent`);
  }
  addPlan(
    user_id: number | null | undefined,
    selections: AvailableData
  ): Observable<any> {
    return this.apiService.post(`${url}/savePlan`, { user_id, selections });
  }
  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('selections');
    localStorage.setItem('currentThemeIndex', '0');
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  }
  setCurrentTILS(index: number) {
    localStorage.setItem('currentThemeIndex', index.toString());
  }
  getPlan(id: number | undefined): Observable<any> {
    return this.apiService.post(`${url}/getPlan`, { id });
  }
  getAllPlan(): Observable<any> {
    return this.apiService.get(`${url}/getAllPlan`);
  }
  setUserLS(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  isAdmin(): boolean {
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      const user = JSON.parse(userJson);
      return user.user_type === 'admin' || user.user_type === 'teacher';
    }
    return false;
  }
  getUserLS(): any {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
  isLoggedIn() {
    return this.getUserLS() ? true : false;
  }
}
