import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTopActivityListComponent } from './general-top-activity-list.component';

describe('GeneralTopActivityListComponent', () => {
  let component: GeneralTopActivityListComponent;
  let fixture: ComponentFixture<GeneralTopActivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTopActivityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTopActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
