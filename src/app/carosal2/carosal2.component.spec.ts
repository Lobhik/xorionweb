import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carosal2Component } from './carosal2.component';

describe('Carosal2Component', () => {
  let component: Carosal2Component;
  let fixture: ComponentFixture<Carosal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carosal2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carosal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
