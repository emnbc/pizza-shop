import { NgModule } from '@angular/core';

import { UpperComponent } from './upper.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';



@NgModule({
  declarations: [UpperComponent],
  imports: [
    SharedModule,
    MaterialModule
  ],
  exports: [UpperComponent]
})
export class UpperModule { }
