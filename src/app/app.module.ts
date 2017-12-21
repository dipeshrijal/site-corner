import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {AuthService} from './public/nlp-login-form/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './app-routing.module';
import {AdminModule} from './admin/admin.module';
import {AdminComponent} from './admin/admin/admin.component';
import {PublicComponent} from './public/public/public.component';
import {PublicModule} from './public/public.module';
import {SecureComponent} from './secure/secure/secure.component';
import {SecureModule} from './secure/secure.module';
import {AuthGuard} from './public/nlp-login-form/auth.guard';
import {AuthInterceptor} from './public/nlp-login-form/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PublicComponent,
    SecureComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    PublicModule,
    SecureModule,
    RoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
