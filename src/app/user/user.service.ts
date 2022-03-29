import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin.model';
import { AuthService } from './auth.service';
import { Employee } from './employee.model';
import { LoginService } from './login.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  adminOut: Admin = {
    adminId: 0,
    adminPassword: "",
    adminFirstName: "",
    adminLastName: "",
    adminContact: 0,
    adminEmail: "",
    adminAddress: "",
    adminRole: ""
  }

  employeeOut: Employee = {
    empId: 0,
    empPassword: "",
    empFirstName: "",
    empLastName: "",
    empContact: 0,
    empEmail: "",
    empAddress: "",
    empRole: ""
  }

  constructor(private authService: AuthService, private http: HttpClient, private loginService: LoginService){}

  userToAdmin(user: User): Admin{
    let newAdmin: Admin = {
      adminId: user.id,
      adminPassword: user.password,
      adminFirstName: user.firstName,
      adminLastName: user.lastName,
      adminContact: user.contact,
      adminEmail: user.email,
      adminAddress: user.address,
      adminRole: user.role
    }

    return newAdmin;
  }

  adminToUser(admin: Admin): User{
    let newUser: User = {
      id: admin.adminId,
      password: admin.adminPassword,
      firstName: admin.adminFirstName,
      lastName: admin.adminLastName,
      contact: admin.adminContact,
      email: admin.adminEmail,
      address: admin.adminAddress,
      role: admin.adminRole
    }
    
    return newUser;
  }

  userToEmployee(user: User): Employee{
    let newEmployee: Employee = {
      empId: user.id,
      empPassword: user.password,
      empFirstName: user.firstName,
      empLastName: user.lastName,
      empContact: user.contact,
      empEmail: user.email,
      empAddress: user.address,
      empRole: user.role
    }
    return newEmployee;
  }

  employeeToUser(employee: Employee): User{
    let newUser: User = {
      id: employee.empId,
      password: employee.empPassword,
      firstName: employee.empFirstName,
      lastName: employee.empLastName,
      contact: employee.empContact,
      email: employee.empEmail,
      address: employee.empAddress,
      role: employee.empRole
    }
    return newUser;
  }



  // validateUser(newUser: User): User{
  //   if(newUser.role == "admin" && newUser.username == "admin" && newUser.password == "admin"){
  //     this.authService.storeUser(newUser);
  //     this.authService.loggedIn = true;
  //   }else if(newUser.role == "employee" && newUser.username == "employee" && newUser.password == "employee"){
  //     this.authService.storeUser(newUser);
  //     this.authService.loggedIn = true;
  //   }else{
  //     newUser = {
  //       username: "",
  //       password: "",
  //       role: "",
  //     }
  //   }
    
  //   return newUser;
  // }

  validateAdmin(newUser: User): User{
    let adminIn = this.userToAdmin(newUser);
    this.loginService.loginAdmin(adminIn).subscribe((response) => {
      console.log(response);
      this.adminOut = response;
    });
    let userOut = this.adminToUser(this.adminOut);
    this.authService.storeUser(userOut);
    this.authService.loggedIn = true;
    return userOut;
  }

  validateEmployee(newUser: User): User{
    let employeeIn = this.userToEmployee(newUser);
    this.loginService.loginEmployee(employeeIn).subscribe((response) => {
      console.log(response);
      this.employeeOut=response;
    });
    let userOut = this.employeeToUser(this.employeeOut);
    this.authService.storeUser(userOut);
    this.authService.loggedIn = true;
    return userOut;
  }




}
