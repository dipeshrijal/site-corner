import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlpSourcesComponent } from './nlp-sources.component';

describe('NlpSourcesComponent', () => {
  let component: NlpSourcesComponent;
  let fixture: ComponentFixture<NlpSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlpSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlpSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
