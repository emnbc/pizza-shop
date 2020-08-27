import { Pipe, PipeTransform } from '@angular/core';
import { RATE, Currency } from '../../services/app.service';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: string | number, currency: Currency): string {
    if(typeof value === "number") {
      if(currency === Currency.DOLLAR) {
        return "$" + (+value / RATE).toFixed(2);
      } else if(currency === Currency.EURO) {
        return (+value).toFixed(2) + " €";
      }
    } else {
      return (+value).toFixed(2) + " ?";
    }
  }

}
