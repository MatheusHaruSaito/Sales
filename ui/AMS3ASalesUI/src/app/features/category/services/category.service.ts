import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/Category.model';
import { AddCategoryRequest } from '../model/add-category-request.models';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }
  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(
      "https://localhost:7014/api/v1/Category"
    );
  }
  AddCategory(categoryRequest : AddCategoryRequest) : Observable<AddCategoryRequest>{
    return this.http.post<AddCategoryRequest>("https://localhost:7014/api/v1/Category",categoryRequest);
  }
}
