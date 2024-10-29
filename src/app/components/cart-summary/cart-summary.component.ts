import {Component, OnInit} from '@angular/core';
import {CartItems} from "../../models/cartItems";
import {CartItem} from "../../models/cartItem";
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[]=[];

  constructor(private cartService: CartService,
              private toastrService: ToastrService,) {}
  ngOnInit() {
    this.getCart();
  }

  removeCartItem(product: Product) {
    this.cartService.removeFromCart(product);
    this.toastrService.warning("Product Removed", product.productName);
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }
}
