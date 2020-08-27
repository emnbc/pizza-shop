import { Component, Input } from '@angular/core';
import { Pizza } from '../../models/pizza.model';

import { Currency } from '../../services/app.service';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() product: Pizza;
  @Input() hideButton: boolean = false;
  @Input() addMethod: (product: Pizza) => void;
  @Input() currency: Currency;

}
