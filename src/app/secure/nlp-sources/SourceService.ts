import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SourceService implements OnInit {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getSource() {
    return this.http.get(`${this.baseUrl}/sources`);
  }

  update(id, likes) {
    return this.http.put(`${this.baseUrl}/sources/${id}`, likes);
  }

  find(id) {
    return this.http.get(`${this.baseUrl}/sources/${id}`);
  }
}
