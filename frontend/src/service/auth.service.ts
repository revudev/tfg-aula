import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '../types';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private apiService: ApiService){}

  getUser = (url: string): Observable<User> => {
    return this.apiService.get(url);
  }

  // constructor(private http: HttpClient) {}
    
  // login(credentials: { username: string, password: string }): Observable<any> {
  //   return this.http.post('', credentials);
  // }

  // logout():     void          { localStorage.removeItem('token'); }
  // isLoggedIn(): boolean       { return !!localStorage.getItem('token'); }
  // getToken():   string | null { return localStorage.getItem('token'); }

}