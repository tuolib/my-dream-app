import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入路由守卫
import { AuthGuard } from './auth/auth.guard';
import { SignInComponent } from './pages/sign/sign-in.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
    // 添加针对当前路由的 canActivate 路由守卫
    canActivate: [AuthGuard]
  },
  {
    path: 'sign',
    component: SignInComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
