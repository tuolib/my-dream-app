import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

// 引入服务
import { SignService } from '../../services/sign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  title = 'my-dream-app';
  username = '';
  password = '';
  confirmPwd = '';
  tips = '';
  isLogin = true;

  // 通过构造函数注入的方式使用服务
  constructor(private services: SignService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url === '/sign') {
      this.router.navigate(['/home']);
    }
  }

  changeSign(): void {
    this.isLogin = !this.isLogin;
  }

  /**
   *  登录
   */
  // tslint:disable-next-line:typedef
  login(): void {
    if (this.trim(this.username) === '') {
      this.tips = 'username is required.';
      return;
    }
    if (this.trim(this.password) === '') {
      this.tips = 'Password is required.';
      return;
    }
    const data = { username: this.username, password: this.password };
    this.services.login(data).subscribe(
      res => {
        console.log(res);
        if (res.success === 1) {
          console.log(1);
          localStorage.setItem('token', res.content.token);
          this.router.navigate(['/home']);
        } else {
          this.tips = res.respMsg;
        }
      },
      error => {
        console.error(error);
      }
    );
  }
  signUp(): void {
    if (this.trim(this.username) === '') {
      this.tips = 'username is required.';
      return;
    }
    if (this.trim(this.password) === '') {
      this.tips = 'Password is required.';
      return;
    }
    if (this.trim(this.confirmPwd) === '') {
      this.tips = 'confirm Password is required.';
      return;
    }
    if (this.trim(this.confirmPwd) !== this.trim(this.password)) {
      this.tips = 'Password and confirm Password must be same.';
      return;
    }
    const data = {
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPwd
    };
    this.services.signUp(data).subscribe(
      res => {
        console.log(res);
        if (res.success === 1) {
          console.log(1);
          localStorage.setItem('token', res.content.token);
          this.router.navigate(['/home']);
        } else {
          console.log(2);
          this.tips = res.respMsg;
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  submit(): void {
    if (this.isLogin) {
      this.login();
    } else {
      this.signUp();
    }
  }

  trim(str: string): string {
    const reg = /^\s+|\s+$/g;
    return str.replace(reg, '');
  }
}
