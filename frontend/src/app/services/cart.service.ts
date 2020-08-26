import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Pizza } from '../models/pizza.model';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart$ = new BehaviorSubject<Order[]>([])

  constructor() { }

  addToCart(product: Pizza) {

    const order: Order = {
      quantity: 1,
      product: product
    };
    const newCart = [...this.cart$.getValue(), order];

    localStorage.setItem('ps_cart', JSON.stringify(newCart));
    this.cart$.next(newCart);
  }

  deleteFromCart(product: Order) {

    const cartConteins = this.cart$.getValue();
    const newCart = cartConteins.filter((el) => {
      return product.product.id !== el.product.id;
    });

    localStorage.setItem('ps_cart', JSON.stringify(newCart));
    this.cart$.next(newCart);
  }

  changeQuantity(value: number, id: number) {
    const cartConteins = this.cart$.getValue();
    cartConteins.map((el) => {
      if(el.product.id === id) {
        el.quantity = value;
      }
    });

    localStorage.setItem('ps_cart', JSON.stringify(cartConteins));
    this.cart$.next(cartConteins);
  }

  getCartFromStorage() {
    const cart = localStorage.getItem('ps_cart');
    this.cart$.next(JSON.parse(cart));
  }

}
