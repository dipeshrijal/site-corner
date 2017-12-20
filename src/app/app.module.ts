import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {NlpSourcesComponent} from './secure/nlp-sources/nlp-sources.component';
import {NlpLikesComponent} from './secure/nlp-likes/nlp-likes.component';
import {NlpCommentsComponent} from './secure/nlp-comments/nlp-comments.component';
import {NlpHeaderComponent} from './layouts/nlp-header/nlp-header.component';
import {NlpFooterComponent} from './layouts/nlp-footer/nlp-footer.component';
import {AuthService} from './public/nlp-login-form/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './app-routing.module';
import {AdminModule} from './admin/admin.module';
import {AdminComponent} from './admin/admin/admin.component';
import {PublicComponent} from './public/public/public.component';
import {PublicModule} from './public/public.module';
import {SecureComponent} from './secure/secure/secure.component';
import {SecureModule} from './secure/secure.module';


@NgModule({
  declarations: [
    AppComponent,
    NlpSourcesComponent,
    NlpSourcesComponent,
    NlpLikesComponent,
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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
