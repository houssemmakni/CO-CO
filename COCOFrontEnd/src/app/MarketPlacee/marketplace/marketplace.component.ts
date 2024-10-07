import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../../model/product';
import { map } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageProcessingService } from 'src/app/image/image-processing.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
p:number=1;
  searchTerm: any ;
  public productDetails: Product[] = [];

  constructor(private router : Router,private productservice:ProductService,private sanitizer:DomSanitizer,private imageProcessingService:ImageProcessingService){}
  ngOnInit(): void {
    this.getAllProduct();
  }
  public getAllProduct(){
    this.productservice.getAllProduct(this.pageNumber).
    pipe(
     map((products: Product[],i) => products.map((product: Product) => this.imageProcessingService.createImages(product)))
  
    ).
    subscribe(
      (resp:Product[])=>{
      console.log(resp);
      this.productDetails=resp;
    },(error:HttpErrorResponse )=>{
      console.log(error);
    }
    );
  }

  goToProduct(id:any){
    this.router.navigate(['/detail',{id:id}]);
  }

  formData: FormData = new FormData();

 
  product!:Product ;

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formData.append('image', file);
    }
  }
  /////////////////////////
  pageNumber: number = 0;
  showLoadButton = false;


 
  public getAllProducts(){
    this.productservice.getAllProduct(this.pageNumber)
    .pipe(
      map((x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp: Product[]) =>{
        console.log(resp);
        if(resp.length == 8){
          this.showLoadButton = true;
        }else{this.showLoadButton = false}
        resp.forEach(p => this.productDetails.push(p));
        // this.productDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }

    );
  }

  public loadMoreProduct(){

    this.pageNumber = this.pageNumber+1;
    this.getAllProducts();
  }
// | paginate :{itemsPerPage:5,currentPage:p};
}
