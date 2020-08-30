import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../models/order.model';
import { Currency } from '../../services/app.service';

type TypeMode = "ORDER" | "HISTORY";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() cart: Order[] = [];
  @Input() currency: Currency;
  @Input() totalPrice: number;
  @Input() mode: TypeMode;

  constructor() { }

  ngOnInit(): void {
  }

}
