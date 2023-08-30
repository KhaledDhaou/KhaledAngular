import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Products } from './products';


@Injectable({
  providedIn: 'root'
  })
  export class ProductsService {

    private baseur1 = "http://localhost:3001/api/articles";

    constructor(private http:HttpClient) { }


    getAllArticles():Observable<Products[]>{
      return this.http.get<Products[]>(this.baseur1)
    }

    }
