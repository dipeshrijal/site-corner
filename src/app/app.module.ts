import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {NlpSourcesComponent} from './secure/nlp-sources/nlp-sources.component';
import {NlpCommentsComponent} from './secure/nlp-comments/nlp-comments.component';
import {NlpHeaderComponent} from './layouts/nlp-header/nlp-header.component';
import {NlpFooterComponent} from './layouts/nlp-footer/nlp-footer.component';
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
import {SourceService} from './secure/nlp-sources/SourceService';


@NgModule({
  declarations: [
    AppComponent,
    NlpSourcesComponent,
    NlpSourcesComponent,
    NlpCommentsComponent,
    NlpHeaderComponent,
    NlpFooterComponent,
    AdminComponent,
    PublicComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    AdminModule,
    PublicModule,
    SecureModule
  ],
  providers: [
    AuthService,
    SourceService,
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
