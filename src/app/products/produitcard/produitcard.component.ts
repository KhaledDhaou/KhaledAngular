import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-produitcard',
  templateUrl: './produitcard.component.html',
  styleUrls: ['./produitcard.component.css']
})
export class ProduitcardComponent {
  produits:Products[]=[]

  constructor(private prserv:ProductsService){}
    ngOnInit(){

      this.loadArticles()

    }
    loadArticles(){
      this.prserv.getAllArticles().subscribe((data:Products[])=>
      this.produits=data)
    }

}
