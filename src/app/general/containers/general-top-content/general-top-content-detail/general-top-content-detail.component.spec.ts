import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTopContentDetailComponent } from './general-top-content-detail.component';

describe('GeneralTopContentDetailComponent', () => {
  let component: GeneralTopContentDetailComponent;
  let fixture: ComponentFixture<GeneralTopContentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTopContentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTopContentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
