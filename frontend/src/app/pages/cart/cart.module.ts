import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { AdjusterModule } from '../../components/adjuster/adjuster.module';
import { UpperModule } from '../../components/upper/upper.module';



@NgModule({
  declarations: [CartComponent],
  imports: [
    SharedModule,
    MaterialModule,
    CartRoutingModule,
    AdjusterModule,
    UpperModule
  ]
})
export class CartModule { }
