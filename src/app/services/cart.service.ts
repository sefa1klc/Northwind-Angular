import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {CartItems} from "../models/cartItems";
import {CartItem} from "../models/cartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: Product) {
    let item = CartItems.find(c=> c.product.productID===product.productID);
    if(item){
      item.quantity++;
    }else{
      CartItems.push({product: product, quantity: 1});
    }
  }

  removeFromCart(product: Product) {
    let item = CartItems.find(c=> c.product.productID===product.productID);
    if(item && item.quantity <= 1){
      CartItems.splice(CartItems.indexOf(item),1);
    }else if(item){
      item.quantity--;
    }
  }
  list() : CartItem[]{
    return CartItems;
  }
}
