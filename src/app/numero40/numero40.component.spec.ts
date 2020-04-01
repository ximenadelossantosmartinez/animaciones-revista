import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero40Component } from './numero40.component';

describe('Numero40Component', () => {
  let component: Numero40Component;
  let fixture: ComponentFixture<Numero40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
