import { Component, OnDestroy, Input } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppService, Currency } from '../../services/app.service';

@Component({
  selector: 'upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.scss']
})
export class UpperComponent implements OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  Currensy = Currency;
  currencyState: Currency;

  @Input() title: string;

  constructor(
    private app: AppService
  ) {
    this.app.currencyState$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(state => this.currencyState = state);
  }

  changeCurrency(event: MatButtonToggleChange) {
    this.app.currencyState$.next(event.value);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
