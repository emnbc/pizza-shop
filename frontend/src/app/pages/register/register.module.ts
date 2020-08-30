import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    SharedModule,
    MaterialModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
