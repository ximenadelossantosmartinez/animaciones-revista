import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero46Component } from './numero46.component';

describe('Numero46Component', () => {
  let component: Numero46Component;
  let fixture: ComponentFixture<Numero46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
