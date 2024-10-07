import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarketplaceComponent } from './MarketPlacee/marketplace/marketplace.component';
import { ProductDetailsComponent } from './MarketPlacee/product-details/product-details.component';
import { RegisterProductComponent } from './MarketPlacee/register-product/register-product.component';
import { ListProduitComponent } from './BackOffice/alltemplate-back/list-produit/list-produit.component';
import { ShowProductDetailsComponent } from './MarketPlacee/show-product-details/show-product-details.component';
import { AddProductBackComponent } from './MarketPlacee/add-product-back/add-product-back.component';
import { ProductResolveBackService } from './image/product-resolve-back.service';
import { DetaitlsbackComponent } from './MarketPlacee/detaitlsback/detaitlsback.component';
import { VaryingmodalcontentComponent } from './MarketPlacee/varyingmodalcontent/varyingmodalcontent.component';
import { AlltemplateBackComponent } from './BackOffice/alltemplate-back/alltemplate-back.component';
import { ReclamtionfrontComponent } from './reclamtionfront/reclamtionfront.component';
import { ReclamtionadminComponent } from './BackOffice/reclamtionadmin/reclamtionadmin.component';
import { ChattroomAssitanceComponent } from './chattroom-assitance/chattroom-assitance.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'marketplace', component: MarketplaceComponent},
  {path:'registerproduct', component: RegisterProductComponent},
  {path: 'detail', component: ProductDetailsComponent ,resolve: { product: ProductResolveBackService }},
  {path: 'detailback', component: DetaitlsbackComponent ,resolve: { product: ProductResolveBackService }},
  {path:'reclamtion', component: ReclamtionfrontComponent},
  {path:'Chattroomassitance', component: ChattroomAssitanceComponent},
  {path:'show', component:ShowProductDetailsComponent},
  {path :'addproduitBack', component:AddProductBackComponent,

    resolve:{
      product:ProductResolveBackService
    }
},
{path:'varying' ,component:VaryingmodalcontentComponent},

{path:'back' ,component:AlltemplateBackComponent,children:[
  {path:'',component:ShowProductDetailsComponent},
  
]

},
{path:'reclamationadmin' ,component:ReclamtionadminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
