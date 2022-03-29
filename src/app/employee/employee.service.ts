import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../expense/expense.model';
import { Pending } from '../expense/pending.model';
import { Employee } from '../user/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  fetchAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:4444/api/employees/')
  }

  fetchEmployee(empId: number): Observable<Employee>{
    return this.http.get<Employee>('http://localhost:4444/api/employees/'+empId);
  }

  fetchEmployeeExpenses(empId: number): Observable<Expense[]>{
    return this.http.get<Expense[]>('http://localhost:4444/api/resolutions/all/'+empId);
  }

  viewPending(empId: number): Observable<Expense[]>{
    return this.http.get<Expense[]>('http://localhost:4444/api/pendings/'+ empId);
  }

  allFinalResolved(empId: number): Observable<Expense[]> {
    return this.http.get<Expense[]>('http://localhost:4444/api/resolutions/final/'+empId);
  }

  submitRequest(pendingModel: Pending): Observable<Pending> {
    return this.http.post<Pending>('http://localhost:4444/api/submit', pendingModel);
  }

  updateInfo(employeeModel: Employee): Observable<Employee>{
    return this.http.put<Employee>('http://localhost:4444/api/employees/', employeeModel);
  }
}

