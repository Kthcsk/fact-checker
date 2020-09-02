import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Levels3UnlockedComponent } from './levels3-unlocked.component';

describe('Levels3UnlockedComponent', () => {
  let component: Levels3UnlockedComponent;
  let fixture: ComponentFixture<Levels3UnlockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Levels3UnlockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Levels3UnlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
