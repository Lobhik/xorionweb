import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobhikComponent } from './lobhik.component';

describe('LobhikComponent', () => {
  let component: LobhikComponent;
  let fixture: ComponentFixture<LobhikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobhikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobhikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
