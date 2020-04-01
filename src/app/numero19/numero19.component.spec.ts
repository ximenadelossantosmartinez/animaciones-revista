import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero19Component } from './numero19.component';

describe('Numero19Component', () => {
  let component: Numero19Component;
  let fixture: ComponentFixture<Numero19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
