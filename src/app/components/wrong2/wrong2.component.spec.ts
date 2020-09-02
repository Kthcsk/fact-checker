import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wrong2Component } from './wrong2.component';

describe('Wrong2Component', () => {
  let component: Wrong2Component;
  let fixture: ComponentFixture<Wrong2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wrong2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrong2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
