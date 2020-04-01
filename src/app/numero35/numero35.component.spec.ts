import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero35Component } from './numero35.component';

describe('Numero35Component', () => {
  let component: Numero35Component;
  let fixture: ComponentFixture<Numero35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
