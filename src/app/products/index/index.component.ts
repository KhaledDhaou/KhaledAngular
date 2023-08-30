import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  produits: Products[]=[]
constructor(private prsev:ProductsService){}
ngOnInit(){
  this.prsev.getAllArticles().subscribe((data:Products[])=>
  this.produits=data)
}
}
