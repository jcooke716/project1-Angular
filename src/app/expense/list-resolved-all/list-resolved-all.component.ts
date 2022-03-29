import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-list-resolved-all',
  templateUrl: './list-resolved-all.component.html',
  styleUrls: ['./list-resolved-all.component.css']
})
export class ListResolvedAllComponent implements OnInit {

  allExpenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.loadAllResolved();
  }

  loadAllResolved(){
    this.expenseService.fetchAllFinal().subscribe((response) => {
      console.log(response);
      this.allExpenses = response;
    })

  }

}
