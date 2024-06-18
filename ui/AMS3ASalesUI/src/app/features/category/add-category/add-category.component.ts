import { Component } from '@angular/core';
import { AddCategoryRequest } from '../model/add-category-request.models';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Router, response } from 'express';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})

export class AddCategoryComponent {

  model: AddCategoryRequest;

  constructor(private categoryService: CategoryService)
  {
    this.model = {
      description:'',
      imageURL:''
    };
}
  onFormSubmit() : void
  {
    this.categoryService.AddCategory(this.model)
    .subscribe({
      next:(response) =>{
        console.log(response);
      }
    });
  }
}

