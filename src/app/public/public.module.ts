import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NlpLoginFormComponent} from './nlp-login-form/nlp-login-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NlpLoginFormComponent
  ]
})
export class PublicModule {
}
