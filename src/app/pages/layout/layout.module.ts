import { NgModule } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { PosterComponent } from '../poster/poster.component';
import { LayoutComponent } from './layout.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { MailOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [MailOutline];

@NgModule({
  imports: [LayoutRoutingModule, NzMenuModule, NzIconModule.forChild(icons)],
  exports: [],
  declarations: [HomeComponent, PosterComponent, LayoutComponent],
  providers: []
})
export class LayoutModule {}
