import { Component } from '@angular/core';
import { AddCategoryRequest } from '../../category/model/add-category-request.models';
import { ProductService } from '../services/product.service';
import { AddProductRequest } from '../model/add-product-request.model';
import { subscribe } from 'diagnostics_channel';
import { response } from 'express';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
 model: AddProductRequest;
  constructor(private productService : ProductService){
    this.model = {
      description: '',
      stock:0,
      price:0.00,
      imageURL:'',
      categoryId:''
    }
  }
  onFormSubmit() : void{
    this.productService.addProduct(this.model)
    .subscribe({
      next:(response) =>{
        console.log(response);
      }
    });
  }
}

