import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { OrderModule } from '../../components/order/order.module';
import { UpperModule } from '../../components/upper/upper.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    SharedModule,
    MaterialModule,
    ProfileRoutingModule,
    OrderModule,
    UpperModule
  ]
})
export class ProfileModule { }
