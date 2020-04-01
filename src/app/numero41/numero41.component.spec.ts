import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero41Component } from './numero41.component';

describe('Numero41Component', () => {
  let component: Numero41Component;
  let fixture: ComponentFixture<Numero41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
