import { NgModule } from '@angular/core';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { CheckoutComponent } from './checkout.component';



@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CheckoutRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CheckoutModule { }
