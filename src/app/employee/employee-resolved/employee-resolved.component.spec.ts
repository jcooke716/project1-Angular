import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResolvedComponent } from './employee-resolved.component';

describe('EmployeeResolvedComponent', () => {
  let component: EmployeeResolvedComponent;
  let fixture: ComponentFixture<EmployeeResolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeResolvedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
