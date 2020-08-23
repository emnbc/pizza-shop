import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() img: string;
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

}
