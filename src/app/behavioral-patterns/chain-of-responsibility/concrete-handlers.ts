import { Approver } from "./handler";
import { ExpenseRequest } from "./expense-request";

/* Concrete Handler: Implements the handling interface defined by the Handler 
   (contains the next handler). */
export class TeamLead implements Approver {
    constructor(private nextApprover: Approver | null = null) { }

    setNext = (approver: Approver) => this.nextApprover = approver;

    processRequest = (expense: ExpenseRequest) => {
        console.log('Team Lead handling expense...');

        if (expense.amount <= 1000) {
            console.log('Team Lead approves the expense request.');
        } else if (this.nextApprover) {
            console.log('Team Lead cannot approve; escalating to the next Department.');
            this.nextApprover.processRequest(expense);
        } else {
            console.log(`None of the approvers in the chain can handle the request. 
                         Approval process cannot proceed.`);
        }
    }
}

export class DepartmentManager implements Approver {
    constructor(private nextApprover: Approver | null = null) { }

    setNext = (approver: Approver) => this.nextApprover = approver;

    processRequest = (expense: ExpenseRequest) => {
        console.log('Department Manager handling expense...');

        if (expense.amount > 1000 && expense.amount <= 5000) {
            console.log('Department Manager approves the expense request.');
        } else if (this.nextApprover) {
            console.log('Department Manager cannot approve; escalating to the next Department.');
            this.nextApprover.processRequest(expense);
        } else {
            console.log(`None of the approvers in the chain can handle the request. 
                         Approval process cannot proceed.`);
        }
    }
}

/* Concrete Handler: Implements the handling interface defined by the Handler
   (do not contains the next handler). */
export class FinanceManager implements Approver {
    processRequest = (expense: ExpenseRequest) => {
        console.log(`Finance Manager handling expense - 
                     Amount: $${expense.amount}, 
                     Purpose: ${expense.purpose}`);
        console.log('Finance Manager approves the expense request without constraints.');
    };


    setNext = (approver: Approver): void => {
        // Finance Manager is the ultimate authority, no next approver.
    };
}
