import { ExpenseRequest } from "./expense-request";

/* Handler (Abstract): Defines an interface for handling requests.
   Optionally implementing the successor link. */
export interface Approver {
    processRequest(expense: ExpenseRequest): void;
    setNext(approver: Approver): void;
}

