import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nlp-likes',
  templateUrl: './nlp-likes.component.html',
  styleUrls: ['./nlp-likes.component.css']
})
export class NlpLikesComponent implements OnInit {

  count: number = 0;

  constructor() { }

  ngOnInit() {
  }


  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

}
