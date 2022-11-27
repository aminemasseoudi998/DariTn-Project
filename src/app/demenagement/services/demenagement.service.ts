import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Demenagement} from "../module/demenagement";

@Injectable({
  providedIn: 'root'
})
export class DemenagementService{
  private api_url= environment.api_url + 'demenagement';
  constructor(private http: HttpClient) {}


  public  getAlldemenagement(){
      return this.http.get(this.api_url + '/retrieve-all-demenagement')
    }
  public adddemenagement(demenagement: Demenagement){
    return this.http.post(this.api_url + '/add-demenagement', demenagement)
  }
  public  deletedemenagement(idDemenagement:any){
    return this.http.delete(this.api_url+'/remove-demenagement/'+idDemenagement)
  }

  }

