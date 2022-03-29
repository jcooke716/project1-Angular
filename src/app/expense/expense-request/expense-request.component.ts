import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee/employee.service';
import { AuthService } from 'src/app/user/auth.service';
import { Pending } from '../pending.model';

@Component({
  selector: 'app-expense-request',
  templateUrl: './expense-request.component.html',
  styleUrls: ['./expense-request.component.css']
})
export class ExpenseRequestComponent implements OnInit {

  newPending: Pending = {
    pendingId: 0,
    pendingRequest: 0,
    pendingAmount: 0,
    pendingReason: "",
    pendingCreated: "",
    pendingResolved: "",
    pendingResponse: 0,
    pendingStatus: ""
  }

  constructor(private authService: AuthService, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    let user = this.authService.retrieveUser();
    this.newPending.pendingRequest = user.id;
  }

  submitRequest(){
    this.employeeService.submitRequest(this.newPending).subscribe((response) => {
      console.log(response);
      this.router.navigate(['employee-pending']);
    })
  }

}
