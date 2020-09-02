import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wrong3Component } from './wrong3.component';

describe('Wrong3Component', () => {
  let component: Wrong3Component;
  let fixture: ComponentFixture<Wrong3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wrong3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrong3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
