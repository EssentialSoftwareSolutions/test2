import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovemoderatorComponent } from './approvemoderator.component';

describe('ApprovemoderatorComponent', () => {
  let component: ApprovemoderatorComponent;
  let fixture: ComponentFixture<ApprovemoderatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovemoderatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovemoderatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
