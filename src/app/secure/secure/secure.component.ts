import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../public/nlp-login-form/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  user;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.user = user;
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('login').catch();
  }

}
