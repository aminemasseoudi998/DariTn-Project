import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Transporteur} from "../module/transporteur";
import {Observable} from "rxjs";
import {Demenagement} from "../../demenagement/module/demenagement";
import {Calendar} from "../../calendar/modalCalendar/calendar";


@Injectable({
  providedIn: 'root'
  })
export class TransporteurService {
  private api_url = environment.api_url + 'transporteur';

  constructor(private http: HttpClient) {
  }

  public getAlltransporteur() {
    return this.http.get(this.api_url + '/retrieve-all-transporteur')
  }


  public addtransporteur(transporteur: Transporteur) {
    return this.http.post(this.api_url + '/add-transporteur', transporteur)
  }

  public deletetransporteur(idTransporteur: any) {
    return this.http.delete(this.api_url + '/remove-transporteur/' + idTransporteur)
  }
  public getOnetransporteur(idTransporteur:any) :Observable<Transporteur>{
    return this.http.get<Transporteur>(this.api_url+'/retrieve-transporteur' +idTransporteur);
  }
  public updatetransporteur(transporteur: Transporteur) {
    return this.http.put(this.api_url + '/modify-transporteur', transporteur)
  }

  SearchTransporteurByName(name: string): Observable<Transporteur[]> {
    return this.http.get<Transporteur[]>(this.api_url + '/retrieve-transporteurByNom/' + name);
  }

  TriTransporteurASC(): Observable<Transporteur[]> {
    return this.http.get<Transporteur[]>(this.api_url + '/retrieve-transporteurASC');
  }

  TriTransporteurDESC(): Observable<Transporteur[]> {
    return this.http.get<Transporteur[]>(this.api_url + '/retrieve-transporteurDESC');
  }

  public affecterTransporteurToDemenagement(demenagement: Demenagement, idTransporteur: Transporteur) {
    return this.http.put(this.api_url + '/assignDemenagementToTransporteur/' +idTransporteur, demenagement)
  }


  public assignTransporteurtToCalendar(calendar: Calendar, idTransporteur: Transporteur) {
    return this.http.put(this.api_url + '/assignTransporteurtToCalendar/' +idTransporteur, calendar)
  }
}
