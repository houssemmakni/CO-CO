import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-detaitlsback',
  templateUrl: './detaitlsback.component.html',
  styleUrls: ['./detaitlsback.component.css']
})
export class DetaitlsbackComponent implements OnInit {

  selectProductIndex = 0;
  product!: Product;

  constructor(private activatedRoute: ActivatedRoute, private router : Router,
    private productService: ProductService) { }

  ngOnInit(): void {

   this.product = this.activatedRoute.snapshot.data['product'];
    
  }

  changeIndex(index:any){
    this.selectProductIndex=index;
  }



  }


