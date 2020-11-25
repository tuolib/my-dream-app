import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosterComponent } from './poster.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: PosterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule]
})
export class PosterRoutingModule {}
