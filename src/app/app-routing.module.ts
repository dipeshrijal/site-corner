import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin/admin.component';
import {PublicComponent} from './public/public/public.component';
import {NlpLoginFormComponent} from './public/nlp-login-form/nlp-login-form.component';
import {SecureComponent} from './secure/secure/secure.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Secure Views'
    },
    component: SecureComponent
  },
  {
    path: '',
    component: PublicComponent,
    data: {title: 'Public Views'},
    children: [
      {
        path: 'login',
        component: NlpLoginFormComponent
      }
    ]
  },
  {
    path: 'admin',
    data: {title: 'Secure Routes'},
    component: AdminComponent,
    children: [
      {path: '', component: DashboardComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {

}
