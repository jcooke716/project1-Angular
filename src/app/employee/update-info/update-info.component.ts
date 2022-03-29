import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';
import { Employee } from 'src/app/user/employee.model';
import { User } from 'src/app/user/user.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  oldEmployee: Employee = {
    empId: 0,
    empPassword: "",
    empFirstName: "",
    empLastName: "",
    empContact: 0,
    empEmail: "",
    empAddress: "",
    empRole: ""
  }

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


  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    let user = this.authService.retrieveUser()
    console.log(user);
    this.employeeService.fetchEmployee(user.id).subscribe((response) =>{
      this.oldEmployee = response;
    })
  }

  updateInfo(){
    this.employeeService.updateInfo(this.oldEmployee).subscribe((response) =>{
      console.log(response);
      this.newUser = {
        id: response.empId,
        password: response.empPassword,
        firstName: response.empFirstName,
        lastName: response.empLastName,
        contact: response.empContact,
        email: response.empEmail,
        address: response.empAddress,
        role: response.empRole
      };
      this.authService.storeUser(this.newUser);
      this.router.navigate(['employee-info']);
    })
  }

}
