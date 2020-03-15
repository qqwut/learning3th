import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTopActivityDetailComponent } from './general-top-activity-detail.component';

describe('GeneralTopActivityDetailComponent', () => {
  let component: GeneralTopActivityDetailComponent;
  let fixture: ComponentFixture<GeneralTopActivityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTopActivityDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTopActivityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
