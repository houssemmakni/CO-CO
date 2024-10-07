import { NgModule,CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MarketplaceComponent } from './MarketPlacee/marketplace/marketplace.component';
import { RegisterProductComponent } from './MarketPlacee/register-product/register-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './image/filter.pipe';
import {MatGridListModule} from '@angular/material/grid-list';
import { DragDirective } from './drag.directive';
import { ListProduitComponent } from './BackOffice/alltemplate-back/list-produit/list-produit.component';
import { ShowProductDetailsComponent } from './MarketPlacee/show-product-details/show-product-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ProdutShowDialogComponent } from './MarketPlacee/produt-show-dialog/produt-show-dialog.component';
import { AddProductBackComponent } from './MarketPlacee/add-product-back/add-product-back.component';
import { CommonModule } from '@angular/common';
import { DetaitlsbackComponent } from './MarketPlacee/detaitlsback/detaitlsback.component';
import { MatCardModule } from '@angular/material/card';
import { VaryingmodalcontentComponent } from './MarketPlacee/varyingmodalcontent/varyingmodalcontent.component';
import { AlltemplateBackComponent } from './BackOffice/alltemplate-back/alltemplate-back.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderfrontComponent } from './headerfront/headerfront.component';
import { FooterfrontComponent } from './footerfront/footerfront.component';
import { ReclamtionfrontComponent } from './reclamtionfront/reclamtionfront.component'; 
import { ToastrModule } from 'ngx-toastr';
import { RecaptchaModule   } from "ng-recaptcha";
import { ReclamtionadminComponent } from './BackOffice/reclamtionadmin/reclamtionadmin.component';
import { ChattroomAssitanceComponent } from './chattroom-assitance/chattroom-assitance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketplaceComponent,
    RegisterProductComponent,

    FilterPipe,
    DragDirective,
    ListProduitComponent,
    ShowProductDetailsComponent,
    ProdutShowDialogComponent,
    AddProductBackComponent,
    DetaitlsbackComponent,
    VaryingmodalcontentComponent,
    AlltemplateBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    HeaderfrontComponent,
    FooterfrontComponent,
    ReclamtionfrontComponent,
    ReclamtionadminComponent,
    ChattroomAssitanceComponent,
    
  ],
  schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    RecaptchaModule,
    FormsModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    
    MatDialogModule,
    CommonModule,
    MatCardModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
