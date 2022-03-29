import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/expense/expense.model';
import { Employee } from 'src/app/user/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee-expenses',
  templateUrl: './list-employee-expenses.component.html',
  styleUrls: ['./list-employee-expenses.component.css']
})
export class ListEmployeeExpensesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  allExpenses: Expense[] = [];

  newEmployee: Employee = {
    empId: 0,
    empPassword: '',
    empFirstName: '',
    empLastName: '',
    empContact: 0,
    empEmail: '',
    empAddress: '',
    empRole: ''
  }

  errorMessage: String = '';

  ngOnInit(): void {

  }

  fetchEmployeeExpenses(){
    this.employeeService.fetchEmployeeExpenses(this.newEmployee.empId).subscribe((response) => {
      console.log(response);
      this.allExpenses = response;
    })
  }



}
