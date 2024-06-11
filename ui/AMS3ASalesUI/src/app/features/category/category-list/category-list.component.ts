import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category.model';
import { CategoryService } from '../services/category.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories?: Category[]
  constructor(private categoryService: CategoryService){}
  ngOnInit():void{
    this.categoryService.getAllCategory()
    .subscribe({
      next : (response) => {
        this.categories = response;
      }
    });
  }
}
