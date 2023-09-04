import { Component,Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { ScategoriesService } from '../../scategories/scategories.service'
import { Scategorie } from '../../scategories/scategorie'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {
  @Input() productId?:any;
  display="none";

  products:Products=new Products();
  scategories:Scategorie[] ;

  constructor(private prodserv:ProductsService,private scatserv:ScategoriesService){}
  ngOnInit(){

    this.loadscategorie()
    this.affectproduit()
  }

affectproduit=()=>{
   this.prodserv.getarticle(this.productId).subscribe(data =>{
    this.products=data;
   })}

   loadscategorie(){
    return this.scatserv.getAllScategorie().subscribe(data=>
      this.scategories=data),
      (error:any)=>console.log(error)
    }

    modifarticle=()=>{
       this.prodserv.updatearticle(this.productId,this.products).subscribe((data=>{
        this.closeModal()

        window.location.reload();


    }))

    }


    openModal() {
         this.display = "block";
    }

    closeModal() {
      this.display = "none";

    }

  }


