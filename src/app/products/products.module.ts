import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ProduitcardComponent } from './produitcard/produitcard.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    ProduitcardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
     FormsModule,
    DataTablesModule



  ]
})
export class ProductsModule { }
