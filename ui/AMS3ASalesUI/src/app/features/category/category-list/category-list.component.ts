import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category.model';
import { CategoryService } from '../services/category.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { DeleteCategoryRequest } from '../model/delete-category-request.model';
import { debuglog } from 'util';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,FormsModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories?: Category[];

  constructor(private categoryService: CategoryService){}

  ngOnInit():void{
    this.categoryService.getAllCategory()
    .subscribe({
      next : (response) => {
        this.categories = response;
      }
    });
  }

  deleteCategory(id:string):void{
    console.log(id);
    this.categoryService.deleteCategory(id)
    .subscribe({
      next : (response) => {
        console.log(response);
        this.ngOnInit();
      }
    })
  }
}
