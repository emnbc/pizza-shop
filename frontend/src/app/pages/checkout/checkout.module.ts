import { NgModule } from '@angular/core';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { CheckoutComponent } from './checkout.component';
import { OrderModule } from '../../components/order/order.module';
import { UpperModule } from '../../components/upper/upper.module';



@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CheckoutRoutingModule,
    SharedModule,
    MaterialModule,
    OrderModule,
    UpperModule
  ]
})
export class CheckoutModule { }
