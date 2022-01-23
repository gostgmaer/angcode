import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkalitonComponent } from './user-skaliton.component';

describe('UserSkalitonComponent', () => {
  let component: UserSkalitonComponent;
  let fixture: ComponentFixture<UserSkalitonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSkalitonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSkalitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
