import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero34Component } from './numero34.component';

describe('Numero34Component', () => {
  let component: Numero34Component;
  let fixture: ComponentFixture<Numero34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
