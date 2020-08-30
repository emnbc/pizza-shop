import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AppService, Currency } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';
import { Order } from '../../models/order.model';
import { CartService } from '../../services/cart.service';
import { HttpHelperService } from '../../services/http-helper.service';
import { User } from '../../models/user.model';

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
  loading: boolean = false;
  orderFormGroup: FormGroup;
  cart: Order[] = [];
  Currensy = Currency;
  currencyState: Currency;
  user: User = new User();

  constructor(
    private formBuilder: FormBuilder,
    private app: AppService,
    private auth: AuthService,
    private cartService: CartService,
    private http: HttpHelperService,
    private router: Router
  ) {
    this.app.currencyState$.subscribe(state => this.currencyState = state);
    this.orderFormGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      address: [null, [Validators.required, Validators.minLength(3)]]
    });
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
    this.cartService.cart$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(cart => this.cart = cart);
    this.auth.user$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(user => {
        this.user = user;
        if(this.user.id) {
          this.orderFormGroup.setControl('email', new FormControl({value: user.email, disabled: true}));
          this.orderFormGroup.patchValue({firstName: user.firstName, lastName: user.lastName});
        }
      });
  }

  changeCurrency(event: MatButtonToggleChange) {
    this.app.currencyState$.next(event.value);
  }

  submitForm() {
    if(this.orderFormGroup.valid) {
      this.loading = true;
      const { email, ...others } = this.orderFormGroup.value;
      const order = {
        ...others,
        email: this.user.email ? this.user.email : email,
        products: this.extractProduct(this.cart)
      };
      this.http.create('orders', order).subscribe((res) => {
        this.cartService.clearCart();
        this.complete = true;
        this.loading = false;
      },(err) => {
        this.loading = false;
      });
    } else {
      this.orderFormGroup.markAllAsTouched();
    }
  }

  goBack() {
    this.router.navigate(['/cart']);
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
