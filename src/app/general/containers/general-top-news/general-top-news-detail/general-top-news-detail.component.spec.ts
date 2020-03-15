import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTopNewsDetailComponent } from './general-top-news-detail.component';

describe('GeneralTopNewsDetailComponent', () => {
  let component: GeneralTopNewsDetailComponent;
  let fixture: ComponentFixture<GeneralTopNewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTopNewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTopNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
