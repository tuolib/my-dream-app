import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// HttpClientModule 报错 Error: node_modules/@angular/common/http/http.d.ts:2826:22 - error NG6002:
// Appears in the NgModule.imports of AppModule, but could not be resolved to an NgModule class
// 重启，
// 见 https://stackoverflow.com/questions/60290309/error-ng6002-appears-in-the-ngmodule-imports-of-appmodule-but-could-not-be-res
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/app-auth-interceptor.module';
import { SignInComponent } from './pages/sign/sign-in.component';
import { SignService } from './services/sign.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SignInComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    AuthInterceptor,
    SignService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
