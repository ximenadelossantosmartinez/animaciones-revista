import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero48Component } from './numero48.component';

describe('Numero48Component', () => {
  let component: Numero48Component;
  let fixture: ComponentFixture<Numero48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero48Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
