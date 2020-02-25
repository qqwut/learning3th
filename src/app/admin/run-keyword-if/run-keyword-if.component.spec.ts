import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunKeywordIfComponent } from './run-keyword-if.component';

describe('RunKeywordIfComponent', () => {
  let component: RunKeywordIfComponent;
  let fixture: ComponentFixture<RunKeywordIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunKeywordIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunKeywordIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
