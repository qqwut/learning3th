import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTopConteByUserComponent } from './general-top-conte-by-user.component';

describe('GeneralTopConteByUserComponent', () => {
  let component: GeneralTopConteByUserComponent;
  let fixture: ComponentFixture<GeneralTopConteByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTopConteByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTopConteByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
