import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/role';
const AUTH_API = 'http://localhost:8081/SpringMVC/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  token : string;
  public roles:string[];
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
  register(username: string, email: string, password: string,telephone: number): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      telephone
      
    }, httpOptions);
  }
}


