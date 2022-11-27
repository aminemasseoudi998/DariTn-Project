import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Calendar} from "./modalCalendar/calendar";
import {Transporteur} from "../transporteur/module/transporteur";

@Injectable({
  providedIn: 'root'
})
export class CalendarServiceService {

  private api_url= environment.api_url + 'calendar';
  constructor(private http: HttpClient) {}


  public addcalendar(calendar: Calendar) {
    return this.http.post(this.api_url + '/add-calendar', calendar)
  }

  public  getAllcalendar(){
    return this.http.get<Calendar[]>(this.api_url + '/retrieve-all-calendar');
  }
public deletecalendar(idCalendar){
    return this.http.delete(this.api_url +'/remove-demenagement/'+idCalendar)
}
}
