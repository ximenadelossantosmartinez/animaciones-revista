import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero49Component } from './numero49.component';

describe('Numero49Component', () => {
  let component: Numero49Component;
  let fixture: ComponentFixture<Numero49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero49Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
