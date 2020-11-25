import { NgModule } from '@angular/core';

import { PosterRoutingModule } from './poster.routing.module';
import { PosterComponent } from './poster.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [PosterRoutingModule, NzTableModule, CommonModule, NzButtonModule],
  exports: [],
  declarations: [PosterComponent],
  providers: []
})
export class PosterModule {}
