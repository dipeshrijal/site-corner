import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nlp-likes',
  templateUrl: './nlp-likes.component.html',
  styleUrls: ['./nlp-likes.component.css']
})
export class NlpLikesComponent implements OnInit {

  @Input('source') source;

  likes;
  dislikes;

  constructor() {
  }

  ngOnInit() {
    this.likes = this.source.likes;
    this.dislikes = this.source.dislikes;
  }

  like() {
    this.likes++;
  }

  dislike() {
    this.dislikes++;
  }

}
