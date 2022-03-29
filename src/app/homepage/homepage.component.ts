import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense/expense.service';
import { AuthService } from '../user/auth.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

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

  pendAmount: number = 0;

  testVariable: String = '';

  constructor(private authService: AuthService, private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.newUser = this.authService.retrieveUser();
    this.expenseService.pendingAmount().subscribe((response) => {
      this.pendAmount = response;
    });
  }


  

}
