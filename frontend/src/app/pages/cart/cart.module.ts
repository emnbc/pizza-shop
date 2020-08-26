import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { AdjusterModule } from '../../components/adjuster/adjuster.module';



@NgModule({
  declarations: [CartComponent],
  imports: [
    SharedModule,
    MaterialModule,
    CartRoutingModule,
    AdjusterModule
  ]
})
export class CartModule { }
