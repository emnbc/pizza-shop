import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { HomeComponent } from './home.component';
import { ProductItemModule } from '../../components/product-item/product-item.module';
import { UpperModule } from '../../components/upper/upper.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    ProductItemModule,
    UpperModule
  ]
})
export class HomeModule { }
