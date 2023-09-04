import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';
import { ScategoriesService } from 'src/app/scategories/scategories.service';
import { Scategorie } from 'src/app/scategories/scategorie';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  products:Products=new Products();
  scategorie:Scategorie[]=[];
  display="none";

  openModal(){
    this.display="block";
  }


  closeModal(){
    this.display="none";
  }


  constructor(private prodserv:ProductsService,private scatserv:ScategoriesService){}
    ngOnInit(){
    this.loadscategorie()
    }



    loadscategorie(){
    return this.scatserv.getAllScategorie().subscribe(data=>
    this.scategorie=data),
    (error:any)=>console.log(error)
    }


//méthode pour ajouter article
ajoutarticle=()=>{
  this.prodserv.createArticle(this.products).subscribe((data=>{
  console.log(data)
  this.closeModal()
  window.location.reload();
  }))
}
}
