import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatSelectChange } from '@angular/material/select';

import { HttpHelperService, Param } from '../../services/http-helper.service';
import { CartService } from '../../services/cart.service';
import { Pizza } from '../../models/pizza.model';
import { Order } from 'src/app/models/order.model';
import { AppService, Currency } from '../../services/app.service';

interface Sort {
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

  sort: Sort[] = [
    {value: 'id,asc', viewValue: 'Default'},
    {value: 'price,asc', viewValue: 'Price: Low to High'},
    {value: 'price,desc', viewValue: 'Price: High to Low'}
  ];
  selectedSort = this.sort[0].value;

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
    this.getPizza('id,asc');
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

  getPizza(sort: string) {
    this.loading = true;

    const params: Param[] = [
      {key: 'sort', value: sort}
    ];

    this.http.find<Pizza[]>("pizzas", params).subscribe((res) => {
      this.pizzas = res.body;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  changeSort(e: MatSelectChange) {
    this.getPizza(e.value);
  }

  changeCurrency(event: MatButtonToggleChange) {
    this.app.currencyState$.next(event.value);
  }

}
