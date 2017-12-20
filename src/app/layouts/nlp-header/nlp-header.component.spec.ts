import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlpHeaderComponent } from './nlp-header.component';

describe('NlpHeaderComponent', () => {
  let component: NlpHeaderComponent;
  let fixture: ComponentFixture<NlpHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlpHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
