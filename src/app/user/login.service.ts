import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin.model';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginAdmin(admin: Admin): Observable<Admin>{
    return this.http.post<Admin>('http://localhost:4444/api/admins/', admin);
  }

  loginEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>('http://localhost:4444/api/employees/', employee);
  }
}
