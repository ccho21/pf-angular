import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { User } from './model/user';
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/auth', { email, password });
  }
}
