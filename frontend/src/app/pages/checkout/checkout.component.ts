import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AppService, Currency } from '../../services/app.service';
import { Order } from '../../models/order.model';
import { CartService } from '../../services/cart.service';
import { HttpHelperService } from '../../services/http-helper.service';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'nat-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  complete: boolean = false;
  orderFormGroup: FormGroup;
  cart: Order[] = [];
  Currensy = Currency;
  currencyState: Currency;

  constructor(
    private formBuilder: FormBuilder,
    private app: AppService,
    private cartService: CartService,
    private http: HttpHelperService,
    private router: Router
  ) {
    this.app.currencyState$.subscribe(state => this.currencyState = state);
  }

  private extractProduct(cart: Order[]) {
    const products = [];
    if(cart && cart.length > 0) {
      cart.forEach((el) => {
        products.push({
          product: el.product.id,
          quantity: el.quantity
        });
      });
    }
    return products;
  }

  ngOnInit(): void {
    this.orderFormGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      address: [null, Validators.required]
    });
    this.cartService.cart$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(cart => this.cart = cart);
  }

  changeCurrency(event: MatButtonToggleChange) {
    this.app.currencyState$.next(event.value);
  }

  submitForm() {
    if(this.orderFormGroup.valid) {
      const order = {
        ...this.orderFormGroup.value,
        products: this.extractProduct(this.cart)
      }
      this.http.create('orders', order).subscribe((res) => {
        this.cartService.clearCart();
        this.complete = true;
        console.log("OK", res);
      },(err) => {
        console.log("ERROR", err);
      });
    } else {
      this.orderFormGroup.markAllAsTouched();
    }
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
