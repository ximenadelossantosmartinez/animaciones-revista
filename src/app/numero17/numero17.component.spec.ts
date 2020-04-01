import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero17Component } from './numero17.component';

describe('Numero17Component', () => {
  let component: Numero17Component;
  let fixture: ComponentFixture<Numero17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
