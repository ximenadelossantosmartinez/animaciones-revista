import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero43Component } from './numero43.component';

describe('Numero43Component', () => {
  let component: Numero43Component;
  let fixture: ComponentFixture<Numero43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
