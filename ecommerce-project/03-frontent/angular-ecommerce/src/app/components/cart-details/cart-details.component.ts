import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  
  cartItems: CartItem[] = [];
  totalPrice:number = 0;
  totalQuantity:number = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {
    //Get a handle to the cart items
    this.cartItems = this.cartService.cartItems; 


    //subscribe to the  cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    //subscribe the totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    //compute cart total price and quantity
    this.cartService.computeCartTotals();

  }

  addQuantity(theCartProduct: CartItem) {
    this.cartService.addToCart(theCartProduct);
  }

  decrementQuantity(theCartProduct: CartItem) {
    this.cartService.decrementQuantity(theCartProduct);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }

}
