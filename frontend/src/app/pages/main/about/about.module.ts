import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
