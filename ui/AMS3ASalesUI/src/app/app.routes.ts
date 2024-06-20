import { Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import path from 'path';
import { Component } from '@angular/core';
import { AddProductComponent } from './features/product/add-product/add-product.component';

export const routes: Routes = [
    {
		path:'admin/categories',
			component: CategoryListComponent
	},
	{
		path:'admin/categories/add',
			component: AddCategoryComponent
	},
	{
		path:'admin/product',
			component: ProductListComponent
	},
  {
    path:'admin/product/add',
    component: AddProductComponent
  }
];
