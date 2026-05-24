import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibebar } from './sidebar';

describe('Sibebar', () => {
  let component: Sibebar;
  let fixture: ComponentFixture<Sibebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sibebar],
    }).compileComponents();

    fixture = TestBed.createComponent(Sibebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
