import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero47Component } from './numero47.component';

describe('Numero47Component', () => {
  let component: Numero47Component;
  let fixture: ComponentFixture<Numero47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero47Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
