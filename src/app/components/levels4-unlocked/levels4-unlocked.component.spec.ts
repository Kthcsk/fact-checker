import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Levels4UnlockedComponent } from './levels4-unlocked.component';

describe('Levels4UnlockedComponent', () => {
  let component: Levels4UnlockedComponent;
  let fixture: ComponentFixture<Levels4UnlockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Levels4UnlockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Levels4UnlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
