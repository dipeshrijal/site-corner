import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlpFooterComponent } from './nlp-footer.component';

describe('NlpFooterComponent', () => {
  let component: NlpFooterComponent;
  let fixture: ComponentFixture<NlpFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlpFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
