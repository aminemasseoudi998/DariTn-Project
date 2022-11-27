import {Sujet} from "../../sujet/modelSujet/sujet";
import {User} from "../../models/user";
import {Commentaire} from "../../commentaire/modelCommentaire/commentaire";

export class ReactionCommentaire{
  id:number;
  reaction: boolean;
  dateAjout:Date;
  commentaire:Commentaire;
  iduser : number;
  user : User;
}
