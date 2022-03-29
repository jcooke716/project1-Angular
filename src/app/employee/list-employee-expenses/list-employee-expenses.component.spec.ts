import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeExpensesComponent } from './list-employee-expenses.component';

describe('ListEmployeeExpensesComponent', () => {
  let component: ListEmployeeExpensesComponent;
  let fixture: ComponentFixture<ListEmployeeExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeeExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
