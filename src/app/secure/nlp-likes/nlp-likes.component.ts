import {Component, Input, OnInit} from '@angular/core';
import {SourceService} from '../nlp-sources/SourceService';

@Component({
  selector: 'app-nlp-likes',
  templateUrl: './nlp-likes.component.html',
  styleUrls: ['./nlp-likes.component.css']
})
export class NlpLikesComponent implements OnInit {

  @Input() source;

  likes;
  dislikes;

  constructor(private sourceService: SourceService) {
  }

  ngOnInit() {
    this.likes = this.source.likes;
    this.dislikes = this.source.dislikes;
  }

  like(id) {
    this.likes++;
    const like = {
      'likes': this.likes
    };
    this.sourceService.update(id, like).subscribe(
      source => {
        console.log(source);
      }
    );
  }

  dislike(id) {
    this.dislikes++;
    const dislike = {
      'dislikes': this.dislikes
    };
    this.sourceService.update(id, dislike).subscribe(
      source => {
        console.log(source);
      }
    );
  }

}
