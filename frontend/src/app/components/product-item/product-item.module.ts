import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { ProductItemComponent } from './product-item.component';



@NgModule({
  declarations: [
    ProductItemComponent
  ],
  imports: [
    SharedModule,
    MaterialModule
  ],
  exports: [
    ProductItemComponent
  ]
})
export class ProductItemModule { }
