import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/expense/expense.model';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/user/user.model';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-resolved',
  templateUrl: './employee-resolved.component.html',
  styleUrls: ['./employee-resolved.component.css']

})
export class EmployeeResolvedComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private authService: AuthService) { }

  allResolved: Expense[] = [];

  newUser: User = {
    id: 0,
    password: "",
    firstName: "",
    lastName: "",
    contact: 0,
    email: "",
    address: "",
    role: ""
  }

  ngOnInit(): void {
    this.newUser = this.authService.retrieveUser();
    this.employeeService.allFinalResolved(this.newUser.id).subscribe((resolved) => {this.allResolved = resolved}); 
  }

}
