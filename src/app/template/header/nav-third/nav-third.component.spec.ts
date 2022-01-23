import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavThirdComponent } from './nav-third.component';

describe('NavThirdComponent', () => {
  let component: NavThirdComponent;
  let fixture: ComponentFixture<NavThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
