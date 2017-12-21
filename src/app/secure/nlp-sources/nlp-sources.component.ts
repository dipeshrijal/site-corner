import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SourceService} from './SourceService';

@Component({
  selector: 'app-nlp-sources',
  templateUrl: './nlp-sources.component.html',
  styleUrls: ['./nlp-sources.component.css']
})
export class NlpSourcesComponent implements OnInit {

  @ViewChild('commentForm') comment: NgForm;

  message;

  sources;
  commentsCount;

  constructor(private source: SourceService) {
  }

  ngOnInit() {
    this.source.getSource().subscribe(
      sources => {
        console.log(sources);
        this.sources = sources;
      }
    );
  }

  addComment() {
    if (this.comment.invalid) {
      this.message = 'Comment cannot be blank';
      return;
    }

    console.log(this.comment.value);
  }

}
