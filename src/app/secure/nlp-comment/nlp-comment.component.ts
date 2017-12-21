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

  @Input() user;

  constructor(private sourceService: SourceService) {
  }

  ngOnInit() {
    console.log(this.user);
  }

  addComment() {
    if (this.form.invalid) {
      return;
    }
    // this.sourceService.update();
  }
}
