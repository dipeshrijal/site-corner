import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-nlp-login-form',
  templateUrl: './nlp-login-form.component.html',
  styleUrls: ['./nlp-login-form.component.css']
})
export class NlpLoginFormComponent implements OnInit {

  @ViewChild('f') login: NgForm;

  user;
  message: String;
  loggedIn: boolean;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  loginUser() {

    if (this.login.invalid) {
      this.message = 'Please fill all the fields';
      return;
    }

    this.auth.authenticate(this.login.value).subscribe(
      (res) => {
        this.loggedIn = res['success'];
        if (res['success'] === true) {
          this.auth.setUser(res['user']);
          this.auth.setToken(res);

          this.router.navigateByUrl('/').catch();

        } else {
          this.message = res['message'];
        }
      }, err => {
        this.message = err['message'];
      }
    );
  }
}
