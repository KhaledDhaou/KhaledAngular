import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ProduitcardComponent } from './produitcard/produitcard.component';






const routes: Routes = [

  { path: 'products', redirectTo: 'products/index', pathMatch: 'full'},
  { path: 'products/index', component: IndexComponent },
  { path: 'products/:productId/view', component:ViewComponent },
  { path: 'products/create', component:CreateComponent},
  { path: 'products/:productId/edit', component: EditComponent },
  {path: '',component:ProduitcardComponent}


];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
