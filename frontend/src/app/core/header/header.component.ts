import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { AppService } from '../../services/app.service';
import { CartService } from '../../services/cart.service';
import { User } from '../../models/user.model';
import { Order } from '../..//models/order.model';

@Component({
  selector: 'nat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: User = new User();
  showMenu: boolean;
  mobile: boolean;
  cart: Order[] = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private app: AppService,
    private cartService: CartService
  ) {
    this.auth.user$.subscribe(user => this.user = user);
    this.app.menuShower.subscribe(show => this.showMenu = show);
    this.app.mobile.subscribe(mobile => this.mobile = mobile);
    this.cartService.cart$.subscribe(cart => this.cart = cart);
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['/home']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  menuSwitch() {
    this.app.menuSwicher.next();
  }

}
