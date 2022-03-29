import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/user/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  allEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadAllEmployees();
  }

  loadAllEmployees(){
    this.employeeService.fetchAllEmployees().subscribe((response) =>{
      console.log(response);
      this.allEmployees = response;
    })
  }

}
