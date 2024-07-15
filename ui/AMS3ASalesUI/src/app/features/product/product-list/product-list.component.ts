import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';
import { response } from 'express';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor,CommonModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit  {
  products?: Product[]
  constructor(private productService: ProductService){}
  ngOnInit():void{
    this.productService.getAllProduct()
    .subscribe({
      next : (response) => {
        this.products = response;
      }
    });
}
  deleteProduct(Id:string):void{
      this.productService.deleteProduct(Id)
      .subscribe({
        next : (response) => {
          console.log(response)
          this.ngOnInit();
        }
      });
  }
}
