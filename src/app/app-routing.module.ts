import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeInfoComponent } from './employee/employee-info/employee-info.component';
import { EmployeePendingComponent } from './employee/employee-pending/employee-pending.component';
import { EmployeeResolvedComponent } from './employee/employee-resolved/employee-resolved.component';
import { ListEmployeeExpensesComponent } from './employee/list-employee-expenses/list-employee-expenses.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { UpdateInfoComponent } from './employee/update-info/update-info.component';
import { WelcomeComponent } from './employee/welcome/welcome.component';
import { ExpenseRequestComponent } from './expense/expense-request/expense-request.component';
import { ListPendingAllComponent } from './expense/list-pending-all/list-pending-all.component';
import { ListResolvedAllComponent } from './expense/list-resolved-all/list-resolved-all.component';
import { UploadReceiptComponent } from './expense/upload-receipt/upload-receipt.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'request', component: ExpenseRequestComponent, canActivate:[AuthGuard]},
  {path: 'pending-all', component: ListPendingAllComponent, canActivate:[AuthGuard]},
  {path: 'resolved-all', component: ListResolvedAllComponent, canActivate:[AuthGuard]},
  {path: 'list-employees', component: ListEmployeesComponent, canActivate:[AuthGuard]},
  {path: 'list-employee-expense', component: ListEmployeeExpensesComponent, canActivate:[AuthGuard]},
  {path: 'homepage', component: HomepageComponent, canActivate:[AuthGuard]},
  {path: 'employee-pending', component: EmployeePendingComponent, canActivate:[AuthGuard]},
  {path: 'employee-resolved', component: EmployeeResolvedComponent, canActivate:[AuthGuard]},
  {path: 'edit-info', component: UpdateInfoComponent, canActivate:[AuthGuard]},
  {path: 'employee-info', component: EmployeeInfoComponent, canActivate:[AuthGuard]},
  {path: 'welcome', component: WelcomeComponent, canActivate:[AuthGuard]},
  {path: 'upload-receipt', component:UploadReceiptComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
