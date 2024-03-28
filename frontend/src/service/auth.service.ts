import { Injectable } from '@angular/core';
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
  login(username: string, password: string): Observable<any> {
    return this.apiService.post('http://localhost:3000/login', { username, password });
  }
} 