import { Component } from '@angular/core';
import { AddCategoryRequest } from '../model/add-category-request.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})

export class AddCategoryComponent {

  model: AddCategoryRequest
  constructor()
  {
    this.model = {
      description:''
    };
}
  onFormSubmit()
  {
    console.log(this.model)
  }
}

