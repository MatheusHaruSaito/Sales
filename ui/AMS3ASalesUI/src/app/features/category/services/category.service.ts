import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/Category.model';
import { AddCategoryRequest } from '../model/add-category-request.models';
import { DeleteCategoryRequest } from '../model/delete-category-request.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httplink :string = "https://localhost:7014/api/v1/Category"
  constructor(private http: HttpClient) { }
  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${this.httplink}`
    );
  }
  AddCategory(categoryRequest : AddCategoryRequest) : Observable<AddCategoryRequest>{
    return this.http.post<AddCategoryRequest>(`${this.httplink}`,categoryRequest);
  }
  deleteCategory(id : string) : Observable<DeleteCategoryRequest>{
    return this.http.delete<DeleteCategoryRequest>(`${this.httplink}/${id}`);
  }
}
