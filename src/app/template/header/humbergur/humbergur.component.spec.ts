import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumbergurComponent } from './humbergur.component';

describe('HumbergurComponent', () => {
  let component: HumbergurComponent;
  let fixture: ComponentFixture<HumbergurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumbergurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumbergurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
