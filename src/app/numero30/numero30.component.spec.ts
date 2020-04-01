import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero30Component } from './numero30.component';

describe('Numero30Component', () => {
  let component: Numero30Component;
  let fixture: ComponentFixture<Numero30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
