import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero20Component } from './numero20.component';

describe('Numero20Component', () => {
  let component: Numero20Component;
  let fixture: ComponentFixture<Numero20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
