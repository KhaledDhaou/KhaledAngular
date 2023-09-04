import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  produits: Products[]=[]
constructor(private prserv:ProductsService){}
ngOnInit(){
  this.prserv.getAllArticles().subscribe((data:Products[])=>
  this.produits=data)
}

delarticle(id:any){
  this.prserv.deleteArticle(id).subscribe(res => {
    this.produits = this.produits.filter((item) =>item._id !== id);
    console.log('Post deleted successfully!');
    })
    }


  }


