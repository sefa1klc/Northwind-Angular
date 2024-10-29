import {Component, OnInit} from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ToastrService} from "ngx-toastr";
import {response} from "express";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  productUpdateForm : FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,) {
  }
  ngOnInit(): void {
      this.createProductAddFrom();
      this.createProductUpdateFrom();
  }

  createProductAddFrom(){
    this.productAddForm = this.formBuilder.group({
      productName:["", Validators.required],
      categoryID:["", Validators.required],
      unitPrice:["", Validators.required],
      unitsInStock:["", Validators.required],
    })
  }
  createProductUpdateFrom(){
    this.productUpdateForm = this.formBuilder.group({
      productName:["", Validators.required],
      productID:["", Validators.required],
      categoryID:["", Validators.required],
      unitPrice:["", Validators.required],
      unitsInStock:["", Validators.required],
    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({}, this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{
        this.toastrService.success(response.message)
      },responseError=>{
        if(responseError.error.Errors.length > 0){
          for(let error of responseError.error.Errors){
            this.toastrService.error(error.ErrorMessage, "Validation Error")
          }
        }
      })
    }else{
      this.toastrService.error("Product not added")
    }
  }

  update(){
    if(this.productUpdateForm.valid){
      let productModel = Object.assign({}, this.productUpdateForm.value)
      this.productService.update(productModel).subscribe(response=>{
        this.toastrService.success(response.message)
      })
    }else{
      this.toastrService.error("Product not updated")
    }
  }
}
