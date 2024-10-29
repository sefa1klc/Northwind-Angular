import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/listResponseModel";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrls = ["https://localhost:7277/api/categories/getall", "https://localhost:7277/api/products/getbyid"];
  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrls[0]);
  }
}
