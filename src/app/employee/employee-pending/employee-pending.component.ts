import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/expense/expense.model';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/user/user.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-pending',
  templateUrl: './employee-pending.component.html',
  styleUrls: ['./employee-pending.component.css']
})
export class EmployeePendingComponent implements OnInit {

  allPending: Expense[] = [];

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

  constructor(private authService: AuthService, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.newUser = this.authService.retrieveUser();
    this.employeeService.viewPending(this.newUser.id).subscribe((response) => {
      this.allPending = response;
    })
  }

  goToSubmitRequest(){
    this.router.navigate(['request']);
  }

  goToUploadReceipt(){
    this.router.navigate(['upload-receipt']);
  }



}
