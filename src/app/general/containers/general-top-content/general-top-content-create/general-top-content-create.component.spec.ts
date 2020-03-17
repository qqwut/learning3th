import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTopContentCreateComponent } from './general-top-content-create.component';

describe('GeneralTopContentCreateComponent', () => {
  let component: GeneralTopContentCreateComponent;
  let fixture: ComponentFixture<GeneralTopContentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTopContentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTopContentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
