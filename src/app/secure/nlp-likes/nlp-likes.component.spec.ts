import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlpLikesComponent } from './nlp-likes.component';

describe('NlpLikesComponent', () => {
  let component: NlpLikesComponent;
  let fixture: ComponentFixture<NlpLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlpLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlpLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
