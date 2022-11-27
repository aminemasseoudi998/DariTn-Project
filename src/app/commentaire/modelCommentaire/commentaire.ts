import {Sujet} from "../../sujet/modelSujet/sujet";
import {User} from "../../models/user";
import {ReactionCommentaire} from "../../reactionCommentaire/modelReactionCommentaire/reactionCommentaire";

export class Commentaire{
  id:number;
  comment: string;
  dateAjout:Date;
 // sujet:Sujet;
  iduser : number;
  user : User;
  reactions : ReactionCommentaire[];

}
