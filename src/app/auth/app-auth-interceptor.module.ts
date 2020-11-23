import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
// import {
//   NzMessageService,
//   NzNotificationService,
//   NzModalService
// } from 'ng-zorro-antd/message';
// import { NzMessageService } from 'ng-zorro-antd/message';
// import { NzModalService } from 'ng-zorro-antd/modal';
// import { NzNotificationService } from 'ng-zorro-antd/notification';
// import { LocalStorageService } from 'ngx-webstorage';

// 拦截器
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    // private message: NzMessageService,
    // private notification: NzNotificationService,
    // private modalService: NzModalService,
    // private storage: LocalStorageService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // 取值， token保存在localstorage,
    // const token = this.storage.retrieve('token');
    // 存值方法
    // this.storage.store('token', data);
    const token = localStorage.getItem('token');
    if (token) {
      // 如果有token，就添加
      req = req.clone({
        setHeaders: {
          authtoken: `${token}`
        }
      });
    }

    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            // 这里是返回，可通过event.body获取返回内容
            // event.body
            return event.body;
          }
        },
        error => {
          console.log('出错拉');
          // this.notification.create(
          //   'error',
          //   '出错拉',
          //   '网络请求错误,请刷新页面试一试'
          // );
        }
      )
    );
  }
}
