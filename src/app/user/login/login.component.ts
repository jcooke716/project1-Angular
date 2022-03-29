import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  errorMessage: String = "";
  pageName: String = 'Sign In'

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  // validateUser(){
  //   let returnUser: User = this.userService.validateUser(this.newUser)
  //   if(returnUser.username == ""){
  //     this.errorMessage = "Invalid credentials!"
  //   }else{
  //     if(returnUser.role == "admin"){
  //       this.router.navigate(['homepage'])
  //     }else{
  //       this.router.navigate(['request'])
  //     }
  //     console.log('login successful!')
  //   }

  // }

  validateUser(){
    if(this.newUser.role == "admin"){
      let returnUserAdmin: User = this.userService.validateAdmin(this.newUser);
      if(returnUserAdmin.email == ""){
        this.errorMessage = "Invalid Credentials!"
      }else{
        this.router.navigate(['homepage']);
      }
    }
    if(this.newUser.role == "employee"){
      let returnUserEmp: User = this.userService.validateEmployee(this.newUser);
      if(returnUserEmp.email == ""){
        this.errorMessage = "Invalid Credentials!"
      }else{
        this.router.navigate(['welcome']);
      }
    }
  }

}
