import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjusterComponent } from './adjuster.component';
import { MaterialModule } from '../../shared/material.module';



@NgModule({
  declarations: [
    AdjusterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AdjusterComponent
  ]
})
export class AdjusterModule { }
