import {Commentaire} from "../../commentaire/modelCommentaire/commentaire";
import {User} from "../../models/user";

export class Sujet{
  id:number;
  titre: string;
  description:string;
  image:string;
  dateAjout : Date;
  commentaires : Commentaire[];
  user : User;
}
