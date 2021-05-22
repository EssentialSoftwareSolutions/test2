import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovecustomerComponent } from './approvecustomer.component';

describe('ApprovecustomerComponent', () => {
  let component: ApprovecustomerComponent;
  let fixture: ComponentFixture<ApprovecustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovecustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
