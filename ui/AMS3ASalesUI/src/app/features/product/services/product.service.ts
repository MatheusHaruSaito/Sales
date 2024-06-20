import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { AddProductRequest } from '../model/add-product-request.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(
          "https://localhost:7014/api/Product"
    );
  }
  addProduct(addCategoryRequest: AddProductRequest): Observable<AddProductRequest>{
    return this.http.post<AddProductRequest>(
      "https://localhost:7014/api/Product",addCategoryRequest
    );
  }
}
