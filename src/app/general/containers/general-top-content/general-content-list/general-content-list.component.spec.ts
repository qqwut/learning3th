import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralContentListComponent } from './general-content-list.component';

describe('GeneralContentListComponent', () => {
  let component: GeneralContentListComponent;
  let fixture: ComponentFixture<GeneralContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralContentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
