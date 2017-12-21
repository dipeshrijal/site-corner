import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SourceService} from '../nlp-sources/SourceService';

@Component({
  selector: 'app-nlp-comment',
  templateUrl: './nlp-comment.component.html',
  styleUrls: ['./nlp-comment.component.css']
})
export class NlpCommentComponent implements OnInit {

  @ViewChild('commentForm') form: NgForm;

  @Input() comments;

  constructor(private sourceService: SourceService) {
  }

  ngOnInit() {
  }

  addComment() {
    if (this.form.invalid) {
      return;
    }

    const commentData = {
      user: JSON.parse(localStorage.getItem('currentUser'))['id'],
      comment: this.form.value['comment'],
    };
    this.sourceService
      .updateComment(localStorage.getItem('source_id'), commentData)
      .subscribe(
        source => this.comments.push(commentData)
      );
  }
}
