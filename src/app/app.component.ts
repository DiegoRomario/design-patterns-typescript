import { Component } from '@angular/core';
import { ExpenseRequest } from './behavioral-patterns/chain-of-responsibility/expense-request';
import { DepartmentManager, FinanceManager, TeamLead } from "./behavioral-patterns/chain-of-responsibility/concrete-handlers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {

    const teamLead = new TeamLead();
    const departmentManager = new DepartmentManager();
    const financeManager = new FinanceManager();

    teamLead.setNext(departmentManager);
    departmentManager.setNext(financeManager);

    const expense = new ExpenseRequest(10000, "Business Trip");

    // Expense Approval Workflow
    teamLead.processRequest(expense);

    /* New expense created
        Team Lead handling expense...
        Team Lead cannot approve; escalating to the next Department.
        Department Manager handling expense...
        Department Manager cannot approve; escalating to the next Department.
        Finance Manager handling expense - Amount: $10000, Purpose: Business Trip
        Finance Manager approves the expense request without constraints. */
  }
}
