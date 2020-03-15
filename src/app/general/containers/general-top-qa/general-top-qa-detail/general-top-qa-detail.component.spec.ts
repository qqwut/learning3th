import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTopQaDetailComponent } from './general-top-qa-detail.component';

describe('GeneralTopQaDetailComponent', () => {
  let component: GeneralTopQaDetailComponent;
  let fixture: ComponentFixture<GeneralTopQaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTopQaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTopQaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
