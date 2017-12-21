import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SourceService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  getSource() {
    return this.http.get('http://localhost:3000/api/sources');
  }
}
