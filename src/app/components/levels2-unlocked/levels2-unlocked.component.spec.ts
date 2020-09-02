import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Levels2UnlockedComponent } from './levels2-unlocked.component';

describe('Levels2UnlockedComponent', () => {
  let component: Levels2UnlockedComponent;
  let fixture: ComponentFixture<Levels2UnlockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Levels2UnlockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Levels2UnlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
