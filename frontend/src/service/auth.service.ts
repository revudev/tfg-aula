import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private apiService: ApiService, private router: Router){}

  login(username: string, password: string): Observable<any> {
    return this.apiService.post('http://localhost:3000/login', { username, password });
  }
  logout(): void { 
    localStorage.removeItem('currentUser'); 
    this.router.navigate(['/']).then(()=>{
      setTimeout(() => { window.location.reload(); }, 500);
    });
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