import { HostListener, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ReplaySubject } from 'rxjs'
import { takeUntil } from 'rxjs/operators';

import { AppService } from './services/app.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  mobile: boolean;

  @ViewChild('snav') snav: MatSidenav;

  constructor(
    private app: AppService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.detectMobile();
    this.app.mobile
      .pipe(takeUntil(this.destroyed$))
      .subscribe(mobile => this.mobile = mobile);

    this.app.menuSwicher
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.snav.toggle());

    this.app.menuShower.next(true);
    this.cartService.getCartFromStorage();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.detectMobile();
  }

  private detectMobile() {
    if(window.innerWidth > 600 && this.snav) {
      this.snav.close();
    }
    this.app.mobile.next(window.innerWidth <= 600 ? true : false);
  }

  ngOnDestroy(): void {
    this.app.menuShower.next(false);

    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
