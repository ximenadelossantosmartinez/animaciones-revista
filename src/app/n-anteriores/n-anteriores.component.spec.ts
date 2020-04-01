import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAnterioresComponent } from './n-anteriores.component';

describe('NAnterioresComponent', () => {
  let component: NAnterioresComponent;
  let fixture: ComponentFixture<NAnterioresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAnterioresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
