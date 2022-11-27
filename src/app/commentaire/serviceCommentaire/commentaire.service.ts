import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Sujet} from "../../sujet/modelSujet/sujet";
import {Commentaire} from "../modelCommentaire/commentaire";
import {ReactionCommentaire} from "../../reactionCommentaire/modelReactionCommentaire/reactionCommentaire";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private api_url = environment.api_url + 'commentaire';
  constructor(private http: HttpClient) { }

  public save(sujet: Sujet){
    return this.http.post<Sujet>(this.api_url + '/add-commentaire', sujet);
  }
  public findAll(){
    return this.http.get<Sujet[]>(this.api_url + '/retrieve-all-commentaires');
  }
  /* public update(sujet: Sujet){
     return this.http.put(this.api_url + '/modify-sujet', sujet);
   }*/
  public findById(id: number){
    return this.http.get<Sujet>(this.api_url + '/retrieve-commentaire/' + id);
  }
  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-commentaire/' + id);
  }

  public addReaction(id: number,reactionCommentaire: ReactionCommentaire){
    return this.http.put<ReactionCommentaire>(this.api_url + '/addAndAssignReactionCommentaireToCommentaire/' + id,reactionCommentaire);
  }
}
