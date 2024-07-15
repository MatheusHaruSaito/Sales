import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { AddProductRequest } from '../model/add-product-request.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httplink: string = "https://localhost:7014/api/Product";

  constructor(private http: HttpClient) { }
  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(
          `${this.httplink}`
    );
  }
  addProduct(AddProductRequest: AddProductRequest): Observable<AddProductRequest>{
    console.log(AddProductRequest)
    return this.http.post<AddProductRequest>(
      this.httplink, AddProductRequest
    );
  }
  deleteProduct(Id:string) : Observable<string>{
    return this.http.delete<string>(`${this.httplink}/${Id}`)
  }
}
