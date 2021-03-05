import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  forfaitsUrlDa = 'https://forfaits-voyages.herokuapp.com/api/forfaits/da/1996417/';
  forfaiturl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';

  constructor(private http: HttpClient) { }
  
  getForfaits(): Observable<Forfait[]>{
    return this.http.get<Forfait[]>(this.forfaitsUrlDa);
  }

  addForfait(forfait: Forfait): Observable<Forfait> {
    console.log(forfait);
    return this.http.post<Forfait>(this.forfaiturl, forfait, httpOptions);
  }

  deleteForfait(id:string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaiturl + id, httpOptions);
  }

  updateForfait(forfait: Forfait): Observable<any>{
    const id = forfait._id;
    console.log(forfait);
    return this.http.put<Forfait>(this.forfaiturl + id, forfait, httpOptions);
  }
}
