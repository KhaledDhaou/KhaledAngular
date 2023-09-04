import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Products } from './products';


@Injectable({
  providedIn: 'root'
  })
  export class ProductsService {

    private baseurl = "http://localhost:3001/api/articles";

    constructor(private http:HttpClient) { }


    getAllArticles():Observable<Products[]>{
      return this.http.get<Products[]>(this.baseurl)
    }


     createArticle(prod:Products):Observable<Products>{
      return this.http.post(this.baseurl,prod);
     }


     deleteArticle(id:object){
      return this.http.delete(this.baseurl + "/" + id);
     }

     getarticle(id:object):Observable<Products>{
      return this.http.get(this.baseurl+ "/" +id)
    }

    updatearticle(_id:object,prod:Products):Observable<any>{
      return this.http.put(this.baseurl + "/" + _id,prod)
    }


    }

