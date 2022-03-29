import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/user/user.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

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
  }

  goToEditInfo(){
    this.router.navigate(['edit-info'])
  }

}
