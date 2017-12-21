import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NlpSourcesListComponent} from './nlp-sources/nlp-sources-list/nlp-sources-list.component';
import {NlpLikesComponent} from './nlp-likes/nlp-likes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NlpLikesComponent
  ],
  declarations: [
    NlpSourcesListComponent,
    NlpLikesComponent
  ]
})
export class SecureModule {
}
