import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SourceService} from './SourceService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nlp-sources',
  templateUrl: './nlp-sources.component.html',
  styleUrls: ['./nlp-sources.component.css']
})
export class NlpSourcesComponent implements OnInit {

  @ViewChild('commentForm') comment: NgForm;

  message;

  sources;

  constructor(private source: SourceService,
              private router: Router) {
  }

  ngOnInit() {
    this.source.getSource().subscribe(
      sources => {
        this.sources = sources;
      }
    );
  }

  details(id) {
    this.router.navigate(['details', id]).catch();
    localStorage.setItem('source_id', id);
  }

  addComment() {
    if (this.comment.invalid) {
      this.message = 'Comment cannot be blank';
      return;
    }

    console.log(this.comment.value);
  }

}
