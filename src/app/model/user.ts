import { Role } from "../models/role";
import { Annonce } from "./annonce";


export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    roles:Role[];
    telephone:number;
    annonces:Annonce[];
    image:String;
}
