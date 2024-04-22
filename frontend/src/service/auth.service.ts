import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Evento } from '../types';

const url = 'https://back-lemon.vercel.app';

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
  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('eleccionPorTema');
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  }

  setUserLS(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  getUserLS(): any {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}
