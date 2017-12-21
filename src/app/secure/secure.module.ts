import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NlpSourcesListComponent} from './nlp-sources-list/nlp-sources-list.component';
import {NlpSourcesComponent} from './nlp-sources/nlp-sources.component';
import {NlpLikesComponent} from './nlp-likes/nlp-likes.component';
import {RoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NlpCommentComponent} from './nlp-comment/nlp-comment.component';
import {SourceService} from './nlp-sources/SourceService';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoutingModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    SourceService
  ],
  declarations: [
    NlpSourcesComponent,
    NlpLikesComponent,
    NlpSourcesListComponent,
    NlpCommentComponent
  ]
})
export class SecureModule {
}
