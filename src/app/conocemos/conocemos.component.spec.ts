import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocemosComponent } from './conocemos.component';

describe('ConocemosComponent', () => {
  let component: ConocemosComponent;
  let fixture: ComponentFixture<ConocemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
