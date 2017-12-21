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
          }
        );
      }
    );
  }

}
