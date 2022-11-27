import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Sujet} from "../modelSujet/sujet";
import {Commentaire} from "../../commentaire/modelCommentaire/commentaire";

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  private api_url = environment.api_url + 'sujet';
  constructor(private http: HttpClient) { }

  public save(sujet: Sujet){
    return this.http.post<Sujet>(this.api_url + '/add-sujet', sujet);
  }
  public findAll(){
    return this.http.get<Sujet[]>(this.api_url + '/retrieve-all-sujets');
  }
 /* public update(sujet: Sujet){
    return this.http.put(this.api_url + '/modify-sujet', sujet);
  }*/

  public findById(id: number){
    return this.http.get<Sujet>(this.api_url + '/retrieve-sujet/' + id);
  }
  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-sujet/' + id);
  }
  public addComment(id: number,commentaire: Commentaire){
    return this.http.put<Commentaire>(this.api_url + '/addAndAssignCommentaireToSujet/' + id,commentaire);
  }

}
