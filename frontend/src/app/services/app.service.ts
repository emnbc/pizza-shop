import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

export const RATE: number = 0.84
export enum Currency { 
  EURO,
  DOLLAR
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  /**
   * Trigger for menu button.
   */
  menuSwicher = new Subject<void>();

  /**
   * State for show or hide menu.
   */
  menuShower = new BehaviorSubject<boolean>(null);

  /**
   * Mobile state: true - mobile, false - not mobile.
   */
  mobile = new BehaviorSubject<boolean>(null);

  /**
   * Currency state: enum type, EURO or DOLLAR.
   */
  currencyState$ = new BehaviorSubject<Currency>(Currency.EURO);

}
