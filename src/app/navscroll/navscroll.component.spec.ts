import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavscrollComponent } from './navscroll.component';

describe('NavscrollComponent', () => {
  let component: NavscrollComponent;
  let fixture: ComponentFixture<NavscrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavscrollComponent]
    });
    fixture = TestBed.createComponent(NavscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
