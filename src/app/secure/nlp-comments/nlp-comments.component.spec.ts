import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlpCommentsComponent } from './nlp-comments.component';

describe('NlpCommentsComponent', () => {
  let component: NlpCommentsComponent;
  let fixture: ComponentFixture<NlpCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlpCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlpCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
