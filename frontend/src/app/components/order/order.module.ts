import { NgModule } from '@angular/core';

import { OrderComponent } from './order.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';



@NgModule({
  declarations: [OrderComponent],
  imports: [
    SharedModule,
    MaterialModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
