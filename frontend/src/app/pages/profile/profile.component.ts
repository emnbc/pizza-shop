import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { HttpHelperService } from '../../services/http-helper.service';
import { Purchase } from '../../models/purchase.model';
import { AppService, Currency } from '../../services/app.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'nat-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User = new User();
  purchases: Purchase[] = [];
  loading: boolean = false;

  Currensy = Currency;
  currencyState: Currency;

  constructor(
    private auth: AuthService,
    private http: HttpHelperService,
    private app: AppService
  ) {
    this.app.currencyState$.subscribe(state => this.currencyState = state);
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.user = user);
    this.getPurchases();
  }

  getTotalPrice(cart: Order[]): number {
    if(cart.length > 0) {
      let total = 0;
      cart.forEach((e) => {
        total += e.quantity*e.product.price;
      });
      return total + 2.99;
    }
  }

  getPurchases() {
    this.loading = true;
    this.http.find<Purchase[]>('orders').subscribe(res => {
      this.purchases = res.body;
      this.loading = false;
    });
  }

}
