import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CartService } from '../../services/cart.service';
import { Order } from '../../models/order.model';
import { OutValue } from '../../components/adjuster/adjuster.component';

@Component({
  selector: 'nat-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  cart: Order[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.cart$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(cart => this.cart = cart);
  }

  deleteFromCart(product: Order) {
    this.cartService.deleteFromCart(product);
  }

  changeQuantity(e: OutValue) {
    this.cartService.changeQuantity(e.value, e.id);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}