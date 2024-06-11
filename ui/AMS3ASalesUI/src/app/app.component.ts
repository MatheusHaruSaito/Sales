import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navBar/navbar/navbar.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,CategoryListComponent,AddCategoryComponent,HttpClientModule,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AMS3ASalesUI';
}
