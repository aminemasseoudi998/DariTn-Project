import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  public isloggedIn: Boolean = false;
  token:string;
  
  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem(TOKEN_KEY, token);
    this.token = token;
    this.isloggedIn = true; 
  }
  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    window.localStorage.setItem(USER_KEY,JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}