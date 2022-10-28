import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAndSearchComponent } from './nav-and-search.component';

describe('NavAndSearchComponent', () => {
  let component: NavAndSearchComponent;
  let fixture: ComponentFixture<NavAndSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAndSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAndSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
