import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Admin } from '../../models/admin';
import { JwtResponse } from '../../models/jwt-response';

import { Observable, BehaviorSubject } from  'rxjs';
import { tap } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER = "http://localhost:3000";
  auth$ = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }
  
  register(user: Admin): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/admin`, user).pipe(
      tap((res: JwtResponse) => {

        if (res.user) {
          localStorage.set("ACCESS_TOKEN", res.user.access_token);
          localStorage.set("EXPIRES_IN", res.user.expires_in);
          this.auth$.next(true);
        }
      })
    )
  }

  login(user: Admin): Observable<JwtResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER}/login`, user).pipe(
      tap(async (res: JwtResponse) => {

        if (res.user) {
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
          localStorage.setItem("EXPIRES_IN", res.user.expires_in);
          this.auth$.next(true);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    this.auth$.next(false);
  }

  isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
    return this.auth$.asObservable();
  }
  
}
