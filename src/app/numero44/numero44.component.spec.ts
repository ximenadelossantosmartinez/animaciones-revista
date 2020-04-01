import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero44Component } from './numero44.component';

describe('Numero44Component', () => {
  let component: Numero44Component;
  let fixture: ComponentFixture<Numero44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
