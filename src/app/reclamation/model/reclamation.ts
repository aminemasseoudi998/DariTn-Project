import {User} from "../../models/user";


export interface IReclamation{
  id?: number;
  titre?: string;
  sujet?: string;
  date?: Date;
  reponse?: string;
  admin?: User;
  user?: User;
  status?: string;


}

export class Reclamation implements IReclamation{


  constructor(
    public id?: number,
  public   titre?: string,
  public sujet?: string,
  public date?: Date,
  public reponse?: string,
    public admin?: User,
    public user?: User,
    public status?: string


  ) {
  }
}
