
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/user';
import { rdvs } from '../models/RDV';
import {environment} from 'src/environments/environment';







const API_URL = 'http://localhost:8081/SpringMVC/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  httpOptions = {
    headers: this.headers
  }
  
private baseURL = "http://localhost:8081/SpringMVC/api/v1/users";
private baseRDV ="http://localhost:8081/SpringMVC/api/v1/DeleteRDV"
private baseRDVUpdate ="http://localhost:8081/SpringMVC/api/v1/RDVs"
private baseURLIMG = "http://localhost:8081/SpringMVC/api/v1/users/SetImage";
private baseURLRDV="http://localhost:8081/SpringMVC/api/v1/RDVs"
private baseURL7 = environment.api_url + "api/v1/usersFA";
private baseURL2 ="http://localhost:8081/SpringMVC/api/v1/users";
private baseURL3="http://localhost:8081/SpringMVC/api/v1/deleteUser"
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', {responseType: 'text'});
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }

  getUserByUsername(username: String): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/${username}`);
  }

  getUserByIdForAnnonce(id: any): Observable<User> {
    return this.http.get<User>(`${this.baseURL7}/${id}`);
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, data);
  }

  SetUserImage(id: any, image: any): Observable<any> {
    return this.http.put(`${this.baseURLIMG}/${id}`, image);
  }

  public deleteRDV(id: number) {
    return this.http.delete(`${this.baseRDV}/${id}`);
  }

  UpdateRDV(id: any, daterdv: any): Observable<any> {
    return this.http.put(`${this.UpdateRDV}/${id}`, daterdv);
  }


  SaveRDV(data: rdvs,idAnnonce:any,idUser:any): Observable<Object> {
    return this.http.post(`${this.baseURLRDV}/${idAnnonce}/${idUser}`, data);

  }


  getUserById(userid: number): Observable<User> {
    return this.http.get<User>('http://localhost:8081/SpringMVC/api/v1/usersid/' + userid);
  }

  getUserslist(){
    return this.http.get<User[]>(`${this.baseURL2}`);
  }

  delete(id: number): Observable<User> {
    console.log("ok");
    
    const url= `${this.baseURL3}/${id}`;
    return this.http.delete<User>(url, this.httpOptions)
  }


}
