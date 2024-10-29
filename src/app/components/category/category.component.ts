import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Category} from "../../models/category";
import {ListResponseModel} from "../../models/listResponseModel";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  categories:Category[] = [];
  currentCategory: Category;
  dataLoaded = false;
  constructor(private categoryService : CategoryService) {
  }
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response =>{
      this.categories = response.data;
      this.dataLoaded = true;
    })
  }

  setCurretCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) {
    return this.currentCategory && this.currentCategory.categoryID === category.categoryID
      ? 'selected-category'
      : '';
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group active";
    }else{
      return "list-group"
    }
  }
}


