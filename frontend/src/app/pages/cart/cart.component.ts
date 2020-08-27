import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CartService } from '../../services/cart.service';
import { Order } from '../../models/order.model';
import { OutValue } from '../../components/adjuster/adjuster.component';
import { AppService, Currency } from '../../services/app.service';

@Component({
  selector: 'nat-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  cart: Order[] = [];
  Currensy = Currency;
  currencyState: Currency;

  constructor(
    private cartService: CartService,
    private app: AppService
  ) {
    this.app.currencyState$.subscribe(state => this.currencyState = state);
  }

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

  changeCurrency(event: MatButtonToggleChange) {
    this.app.currencyState$.next(event.value);
  }

  getTotalPrice(): number {
    if(this.cart.length > 0) {
      let total = 0;
      this.cart.forEach((e) => {
        total += e.quantity*e.product.price;
      });
      return total + 2.99;
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}