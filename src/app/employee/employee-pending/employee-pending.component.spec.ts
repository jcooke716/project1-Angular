import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePendingComponent } from './employee-pending.component';

describe('EmployeePendingComponent', () => {
  let component: EmployeePendingComponent;
  let fixture: ComponentFixture<EmployeePendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
