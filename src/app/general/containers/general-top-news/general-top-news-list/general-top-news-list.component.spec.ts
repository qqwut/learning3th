import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTopNewsListComponent } from './general-top-news-list.component';

describe('GeneralTopNewsListComponent', () => {
  let component: GeneralTopNewsListComponent;
  let fixture: ComponentFixture<GeneralTopNewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTopNewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTopNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
