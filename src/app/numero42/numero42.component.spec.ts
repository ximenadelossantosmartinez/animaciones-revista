import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero42Component } from './numero42.component';

describe('Numero42Component', () => {
  let component: Numero42Component;
  let fixture: ComponentFixture<Numero42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/** */
