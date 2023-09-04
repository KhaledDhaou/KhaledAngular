
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scategorie } from './scategorie';

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {

  private baseurl = "http://localhost:3001/api/Scategories";

  constructor(private http:HttpClient) { }


  getAllScategorie():Observable<Scategorie[]>{
    return this.http.get<Scategorie[]>(this.baseurl)
  }


   createScategorie(prod:Scategorie):Observable<Scategorie>{
    return this.http.post(this.baseurl,prod);
   }


   deleteScategorie(id:object){
    return this.http.delete(this.baseurl + "/" + id);
   }

   getScategorie(id:object):Observable<Scategorie>{
    return this.http.get(this.baseurl+id)
  }

  updateScategorie(_id:object,prod:Scategorie):Observable<any>{
    return this.http.put(this.baseurl + _id,prod)
  }
  }


