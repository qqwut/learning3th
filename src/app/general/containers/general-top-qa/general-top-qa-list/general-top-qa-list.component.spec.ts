import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTopQaListComponent } from './general-top-qa-list.component';

describe('GeneralTopQaListComponent', () => {
  let component: GeneralTopQaListComponent;
  let fixture: ComponentFixture<GeneralTopQaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTopQaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTopQaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
