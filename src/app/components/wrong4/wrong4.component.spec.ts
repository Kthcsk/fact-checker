import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wrong4Component } from './wrong4.component';

describe('Wrong4Component', () => {
  let component: Wrong4Component;
  let fixture: ComponentFixture<Wrong4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wrong4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrong4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
