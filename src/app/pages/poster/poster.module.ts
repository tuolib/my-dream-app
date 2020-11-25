import { NgModule } from '@angular/core';

import { PosterRoutingModule } from './poster.routing.module';
import { PosterComponent } from './poster.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [PosterRoutingModule, NzTableModule, CommonModule],
  exports: [],
  declarations: [PosterComponent],
  providers: []
})
export class PosterModule {}
