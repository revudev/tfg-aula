import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private apiService: ApiService){}

  login(username: string, password: string): Observable<any> {
    return this.apiService.post('http://localhost:3000/login', { username, password });
  }
  logout(): void { 
    localStorage.removeItem('currentUser'); 
    //Redirect to home
    window.location.reload();
  }

  setUserInLocalStorage(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  getUserFromLocalStorage(): any {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
  // getUser = (url: string): Observable<User> => {
  //   return this.apiService.get(url);
  // }
} 