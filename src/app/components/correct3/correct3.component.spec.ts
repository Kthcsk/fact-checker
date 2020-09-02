import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Correct3Component } from './correct3.component';

describe('Correct3Component', () => {
  let component: Correct3Component;
  let fixture: ComponentFixture<Correct3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Correct3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Correct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
