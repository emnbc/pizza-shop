import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

import { HttpHelperService } from '../../services/http-helper.service';
import { CartService } from '../../services/cart.service';
import { Pizza } from '../../models/pizza.model';
import { Order } from 'src/app/models/order.model';
import { AppService, Currency } from '../../services/app.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'nat-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Currensy = Currency;
  currencyState: Currency;
  loading: boolean = false;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  pizzas: Pizza[] = [];
  cart: Order[] = [];

  constructor(
    private http: HttpHelperService,
    private cartService: CartService,
    private app: AppService
  ) { 
    this.cartService.cart$.subscribe(cart => this.cart = cart);
    this.app.currencyState$.subscribe(state => this.currencyState = state);
  }

  ngOnInit(): void {
    this.getPizza();
  }

  addToCart(product: Pizza): void {
    this.cartService.addToCart(product);
  }

  isConteins(product: Pizza): boolean {
    const result = this.cart.filter((el) => {
      return el.product.id === product.id;
    });
    return result.length > 0 ? true : false;
  }

  getPizza() {
    this.loading = true;
    this.http.find<Pizza[]>("pizzas").subscribe((res) => {
      this.pizzas = res.body;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  changeCurrency(event: MatButtonToggleChange) {
    this.app.currencyState$.next(event.value);
  }

}
