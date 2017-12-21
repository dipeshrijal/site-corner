import {Component, OnInit} from '@angular/core';
import {SourceService} from '../nlp-sources/SourceService';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-nlp-sources-list',
  templateUrl: './nlp-sources-list.component.html',
  styleUrls: ['./nlp-sources-list.component.css']
})
export class NlpSourcesListComponent implements OnInit {

  corner;
  comments;
  id;
  likes;
  dislikes;

  constructor(private sourceService: SourceService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.sourceService.find(params['id']).subscribe(
          (source) => {
            this.id = params['id'];
            this.corner = source;
            this.comments = source['comment'];
            this.likes = this.corner.likes;
            this.dislikes = this.corner.dislikes;
          }
        );
      }
    );
  }

  like(id) {
    this.likes++;
    const like = {
      'likes': this.likes
    };
    this.sourceService.update(id, like).subscribe(
      source => {
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
      }
    );
  }

}
