import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTopContentListComponent } from './general-top-content-list.component';

describe('GeneralTopContentListComponent', () => {
  let component: GeneralTopContentListComponent;
  let fixture: ComponentFixture<GeneralTopContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTopContentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTopContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
