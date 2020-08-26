import { Component, OnInit } from '@angular/core';

import { HttpHelperService } from '../../services/http-helper.service';
import { CartService } from '../../services/cart.service';
import { Pizza } from '../../models/pizza.model';
import { Order } from 'src/app/models/order.model';

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

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  pizzas: Pizza[] = [];
  cart: Order[] = [];

  constructor(
    private http: HttpHelperService,
    private cartService: CartService
  ) { 
    this.cartService.cart$.subscribe(cart => this.cart = cart);
  }

  ngOnInit(): void {
    this.http.find<Pizza[]>("pizzas").subscribe((res) => {
      this.pizzas = res.body;
    });
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

}
