import {ImageVideo} from "../../shared/model/imageVideo";
import {User} from "../../models/user";

export interface IMobilier{
  id?: number;
  titre?: string;
  description?: string;
  etatMobilier?: string;
  date?: Date;
  dateVendu?: Date;
  prix?: number;
  status?: boolean;

  achteur?: User;
  vendeur?: User;
  imageVideo?: ImageVideo[];
  placeholder?: string;
}

export class Mobilier implements IMobilier {
  constructor(
    public id?: number,
    public   titre?: string,
    public description?: string,
    public etatMobilier?: string,
    public prix?: number,
    public date?: Date,
    public dateVendu?: Date,
    public achteur?: User,
    public vendeur?: User,
    public status?:boolean,
    public imageVideo?: ImageVideo[],
    public placeholder?: string
  ) {
  }
}
