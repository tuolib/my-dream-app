import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入路由守卫
import { AuthGuard } from './auth/auth.guard';
import { SignInComponent } from './pages/sign/sign-in.component';

const routes: Routes = [
  {
    path: 'sign',
    component: SignInComponent
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/layout/layout.module').then(m => m.LayoutModule),
    // 添加针对当前路由的 canActivate 路由守卫
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
