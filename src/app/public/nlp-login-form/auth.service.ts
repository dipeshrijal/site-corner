import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  authenticate(user) {
    return this.http.post(`${this.baseUrl}/authenticate`, user);
  }

}
