import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Correct4Component } from './correct4.component';

describe('Correct4Component', () => {
  let component: Correct4Component;
  let fixture: ComponentFixture<Correct4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Correct4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Correct4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
