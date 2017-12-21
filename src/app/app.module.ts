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
import {NlpSourcesComponent} from './secure/nlp-sources/nlp-sources.component';
import {NlpLikesComponent} from './secure/nlp-likes/nlp-likes.component';
import {NlpCommentComponent} from './secure/nlp-comment/nlp-comment.component';
import {NlpSourcesListComponent} from './secure/nlp-sources-list/nlp-sources-list.component';
import {SourceService} from './secure/nlp-sources/SourceService';
import {SummerizePipe} from './secure/nlp-sources/summerize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PublicComponent,
    SecureComponent,
    NlpSourcesComponent,
    NlpLikesComponent,
    NlpSourcesListComponent,
    NlpCommentComponent,
    SummerizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    PublicModule,
    RoutingModule
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
