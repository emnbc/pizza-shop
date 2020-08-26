import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface OutValue {
  value: number;
  id: number;
}

@Component({
  selector: 'adjuster',
  templateUrl: './adjuster.component.html',
  styleUrls: ['./adjuster.component.scss']
})
export class AdjusterComponent implements OnInit {

  @Input() value: number = 1;
  @Input() id: number;
  @Output() outValue: EventEmitter<OutValue> = new EventEmitter<OutValue>();

  ngOnInit(): void {

  }

  incrementValue() {
    this.value++;
    this.outValue.emit({value: this.value, id: this.id});
  }

  decrementValue() {
    if(this.value > 1) {
      this.value--;
      this.outValue.emit({value: this.value, id: this.id});
    }
  }

}
