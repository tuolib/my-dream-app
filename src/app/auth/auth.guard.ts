import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // 判断是否有 token 信息
    const token = localStorage.getItem('token') || '';
    // const token = this.storage.retrieve('token');

    if (token === '') {
      this.router.navigate(['/sign']);
      return false;
    }

    // 判断是否可以访问当前连接
    // let url: string = state.url;
    // if (token === 'admin' && url === '/crisis-center') {
    //   return true;
    // }

    // this.router.navigate(['/sign']);
    return true;
  }
}
