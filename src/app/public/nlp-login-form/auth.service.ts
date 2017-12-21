import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  token: string;
  private baseUrl = 'http://localhost:3000/api';
  private user$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
  }

  authenticate(user) {
    return this.http.post(`${this.baseUrl}/authenticate`, user);
  }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  setUser(user) {
    this.user$.next(user);
  }

  setToken(res) {
    if (res['success'] === true) {
      this.token = res['token'];
      localStorage.setItem(
        'currentUser', JSON.stringify({
          username: res['user']['username'],
          name: res['user']['name'],
          id: res['user']['_id'],
          token: this.token
        }));
    }
    return res;
  }


}
