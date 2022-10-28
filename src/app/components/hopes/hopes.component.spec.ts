import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopesComponent } from './hopes.component';

describe('HopesComponent', () => {
  let component: HopesComponent;
  let fixture: ComponentFixture<HopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
