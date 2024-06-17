import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';

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
}
