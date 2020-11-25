import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './layout.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { MailOutline, TeamOutline, HomeOutline, MenuFoldOutline, MenuUnfoldOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [MailOutline, TeamOutline, HomeOutline, MenuFoldOutline, MenuUnfoldOutline];
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    LayoutRoutingModule,
    NzMenuModule,
    NzIconModule.forChild(icons),
    CommonModule,
    NzButtonModule
  ],
  exports: [],
  declarations: [HomeComponent, LayoutComponent],
  providers: []
})
export class LayoutModule {}
