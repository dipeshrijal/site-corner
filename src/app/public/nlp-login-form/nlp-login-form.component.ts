import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-nlp-login-form',
  templateUrl: './nlp-login-form.component.html',
  styleUrls: ['./nlp-login-form.component.css']
})
export class NlpLoginFormComponent implements OnInit {

  @ViewChild('f') login;

  user;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  loginUser() {
    this.auth.authenticate(this.login.value).subscribe(
      user => {
        this.user = user;
        this.router.navigateByUrl('').catch();
      }
    );
  }
}
