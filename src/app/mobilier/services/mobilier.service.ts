import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Mobilier} from "../model/mobilier";


@Injectable({
  providedIn: 'root'
})

export class MobilierService {
  private api_url = environment.api_url + 'Mobilier';
  private baseURL =  environment.api_url +  "Mobilier/Add-Mobilier";
  constructor(private http: HttpClient) { }

  public save(mobilier: Mobilier ,id:any){
    return this.http.post(`${this.baseURL}/${id}`, mobilier);
  }
  public findAll(){
    return this.http.get(this.api_url + '/retrieveAllMobilier');
  }
  public update(mobilier: Mobilier){
    return this.http.put(this.api_url + '/update-Mobilier', mobilier);
  }
  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-Mobilier/' + id);
  }
  public delete(id: number){
    return this.http.delete(this.api_url + '/removeMobilier/' + id);
  }


  findStat() {
    return this.http.get(this.api_url + '/vendu');

  }
}
