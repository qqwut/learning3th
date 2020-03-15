import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralContentDetailComponent } from './general-content-detail.component';

describe('GeneralContentDetailComponent', () => {
  let component: GeneralContentDetailComponent;
  let fixture: ComponentFixture<GeneralContentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralContentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralContentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
